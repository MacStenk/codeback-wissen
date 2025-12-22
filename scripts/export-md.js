#!/usr/bin/env node
/**
 * MDX → MD Export Script
 * 
 * Konvertiert alle MDX/MD-Dateien aus src/content/docs/
 * in saubere Markdown-Dateien für Download und Nostr-Publishing.
 * 
 * Entfernt:
 * - Import-Statements
 * - Starlight-Komponenten (Aside, Tabs, Steps, etc.)
 * - JSX-Syntax
 * 
 * Behält:
 * - Frontmatter
 * - Markdown-Inhalt
 * - Tabellen, Listen, Code-Blöcke
 * 
 * Usage: node scripts/export-md.js
 */

import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, basename, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CONTENT_DIR = join(ROOT, 'src/content/docs');
const OUTPUT_DIR = join(ROOT, 'dist/downloads');

/**
 * Konvertiert MDX zu sauberem Markdown
 */
function mdxToMd(content, filename) {
  let md = content;
  
  // 1. Import-Statements entfernen
  md = md.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, '');
  md = md.replace(/^import\s+{[\s\S]*?}\s+from\s+['"].*?['"];?\s*$/gm, '');
  
  // 2. Aside-Komponenten konvertieren
  // <Aside type="tip" title="TL;DR">content</Aside>
  md = md.replace(/<Aside\s+type="tip"(?:\s+title="([^"]*)")?\s*>([\s\S]*?)<\/Aside>/g, (_, title, content) => {
    const header = title ? `**${title}:** ` : '';
    return `> [!TIP]${header ? '\n> ' + header : ''}\n> ${content.trim().replace(/\n/g, '\n> ')}`;
  });
  
  md = md.replace(/<Aside\s+type="caution"(?:\s+title="([^"]*)")?\s*>([\s\S]*?)<\/Aside>/g, (_, title, content) => {
    const header = title ? `**${title}:** ` : '';
    return `> [!CAUTION]${header ? '\n> ' + header : ''}\n> ${content.trim().replace(/\n/g, '\n> ')}`;
  });
  
  md = md.replace(/<Aside\s+type="note"(?:\s+title="([^"]*)")?\s*>([\s\S]*?)<\/Aside>/g, (_, title, content) => {
    const header = title ? `**${title}:** ` : '';
    return `> [!NOTE]${header ? '\n> ' + header : ''}\n> ${content.trim().replace(/\n/g, '\n> ')}`;
  });
  
  md = md.replace(/<Aside\s+type="danger"(?:\s+title="([^"]*)")?\s*>([\s\S]*?)<\/Aside>/g, (_, title, content) => {
    const header = title ? `**${title}:** ` : '';
    return `> [!WARNING]${header ? '\n> ' + header : ''}\n> ${content.trim().replace(/\n/g, '\n> ')}`;
  });
  
  // Generische Aside ohne type
  md = md.replace(/<Aside(?:\s+title="([^"]*)")?\s*>([\s\S]*?)<\/Aside>/g, (_, title, content) => {
    const header = title ? `**${title}:** ` : '';
    return `> [!NOTE]${header ? '\n> ' + header : ''}\n> ${content.trim().replace(/\n/g, '\n> ')}`;
  });
  
  // 3. Tabs konvertieren
  // <Tabs><TabItem label="X">content</TabItem></Tabs>
  md = md.replace(/<Tabs>([\s\S]*?)<\/Tabs>/g, (_, tabsContent) => {
    const items = [];
    const tabItemRegex = /<TabItem\s+label="([^"]*)">([\s\S]*?)<\/TabItem>/g;
    let match;
    while ((match = tabItemRegex.exec(tabsContent)) !== null) {
      items.push(`**${match[1]}:**\n${match[2].trim()}`);
    }
    return items.join('\n\n');
  });
  
  // 4. Steps konvertieren
  md = md.replace(/<Steps>([\s\S]*?)<\/Steps>/g, (_, content) => {
    // Steps sind meist schon nummerierte Listen, einfach Tags entfernen
    return content.trim();
  });
  
  // 5. Details/Summary beibehalten (ist valides Markdown in manchen Parsern)
  // Alternativ zu Überschriften konvertieren:
  // md = md.replace(/<details>\s*<summary>([^<]*)<\/summary>([\s\S]*?)<\/details>/g, (_, summary, content) => {
  //   return `### ${summary.replace(/\*\*/g, '')}\n\n${content.trim()}`;
  // });
  
  // 6. Andere HTML-Tags die übrig bleiben könnten
  md = md.replace(/<br\s*\/?>/g, '\n');
  
  // 7. Leere Zeilen aufräumen (max 2 aufeinanderfolgende)
  md = md.replace(/\n{3,}/g, '\n\n');
  
  // 8. Führende/trailing Whitespace pro Zeile trimmen
  md = md.split('\n').map(line => line.trimEnd()).join('\n');
  
  // 9. Datei-Start aufräumen (leere Zeilen nach Frontmatter)
  md = md.replace(/(^---[\s\S]*?---)\n{3,}/m, '$1\n\n');
  
  return md.trim() + '\n';
}

/**
 * Rekursiv alle MDX/MD-Dateien finden
 */
async function findContentFiles(dir, files = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // .obsidian etc. ignorieren
      if (!entry.name.startsWith('.')) {
        await findContentFiles(fullPath, files);
      }
    } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Hauptfunktion
 */
async function main() {
  console.log('🔄 MDX → MD Export\n');
  
  // Output-Verzeichnis erstellen
  await mkdir(OUTPUT_DIR, { recursive: true });
  
  // Alle Content-Dateien finden
  const files = await findContentFiles(CONTENT_DIR);
  console.log(`📁 ${files.length} Dateien gefunden\n`);
  
  let exported = 0;
  
  for (const file of files) {
    const relativePath = file.replace(CONTENT_DIR + '/', '');
    const content = await readFile(file, 'utf-8');
    
    // Source URL berechnen (wissen.codeback.de/path/)
    const slug = relativePath.replace(/\.(mdx?|md)$/, '').replace(/\/index$/, '');
    const sourceUrl = `https://wissen.codeback.de/${slug}/`;
    
    // Konvertieren und source_url ins Frontmatter einfügen
    let md = mdxToMd(content, basename(file));
    
    // source_url ins Frontmatter einfügen (falls Frontmatter vorhanden)
    md = md.replace(/^(---\n[\s\S]*?)(---)/, `$1source_url: "${sourceUrl}"\n$2`);
    
    // Output-Pfad bestimmen (Verzeichnisstruktur beibehalten)
    const outputRelative = relativePath.replace(/\.mdx$/, '.md');
    const outputPath = join(OUTPUT_DIR, outputRelative);
    
    // Verzeichnis erstellen falls nötig
    await mkdir(dirname(outputPath), { recursive: true });
    
    // Schreiben
    await writeFile(outputPath, md, 'utf-8');
    
    console.log(`✓ ${outputRelative}`);
    exported++;
  }
  
  console.log(`\n✅ ${exported} Dateien exportiert nach dist/downloads/`);
}

main().catch(console.error);
