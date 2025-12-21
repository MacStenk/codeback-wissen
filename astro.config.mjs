// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import starlightLlmsTxt from 'starlight-llms-txt';

// https://astro.build/config
export default defineConfig({
	site: 'https://wissen.codeback.de',
	integrations: [
		starlight({
			title: 'CodeBack Wissen',
			description: 'Wissensbasis zu LLM-Optimierung, AI Sichtbarkeit und dem neuen Internet',
			lastUpdated: true,
			
			// Custom Head Component für Schema.org
			components: {
				Head: './src/components/Head.astro',
			},
			
			// Deutsche Lokalisierung
			defaultLocale: 'root',
			locales: {
				root: { label: 'Deutsch', lang: 'de' },
			},
			
			// Social Links
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/codeback-de' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/codeback_de' },
			],
			
			// Plugins
			plugins: [
				starlightLlmsTxt({
					projectName: 'CodeBack Wissensbasis',
					description: 'Fachliches Nachschlagewerk zu LLM-Optimierung, Schema.org und AI Sichtbarkeit für Coaches und Berater im DACH-Raum.',
				}),
				starlightLinksValidator(),
			],
			
			
			// Sidebar Struktur
			sidebar: [
				{
					label: 'Grundlagen',
					items: [
						{ label: 'Was ist LLM-Optimierung?', slug: 'grundlagen/was-ist-llm-optimierung' },
						{ label: 'Perplexity vs. Google', slug: 'grundlagen/perplexity-vs-google' },
						{ label: 'Schema.org für KI', slug: 'grundlagen/schema-org-fuer-ki' },
					],
				},
				{
					label: 'Anleitungen',
					items: [
						{ label: 'llms.txt erstellen', slug: 'anleitungen/llms-txt-erstellen' },
						{ label: 'Website optimieren', slug: 'anleitungen/website-optimieren' },
					],
				},
				{
					label: 'Tools',
					items: [
						{ label: 'AI Radar Einführung', slug: 'tools/ai-radar-einfuehrung' },
						{ label: 'LLM Readability Checker', slug: 'tools/llm-readability-checker' },
					],
				},
				{
					label: 'Referenz',
					items: [
						{ label: 'Glossar', slug: 'referenz/glossar' },
						{ label: 'FAQ', slug: 'referenz/faq' },
					],
				},
			],
			
			// Customization
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
