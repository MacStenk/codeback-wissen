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
				Footer: './src/components/Footer.astro',
			},
			
			// Deutsche Lokalisierung
			defaultLocale: 'root',
			locales: {
				root: { label: 'Deutsch', lang: 'de' },
			},
			
			// Social Links
			social: [
				{ icon: 'external', label: 'VisionFusen', href: 'https://visionfusen.org' },
				{ icon: 'external', label: 'Steven Noack', href: 'https://stevennoack.de' },
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
						{ label: 'Erste Schritte zur AI-Sichtbarkeit', slug: 'grundlagen/erste-schritte-ai-sichtbarkeit' },
						{ label: 'Was ist LLM-Optimierung?', slug: 'grundlagen/was-ist-llm-optimierung' },
						{ label: 'LLM-Readability vs SEO', slug: 'grundlagen/llm-readability-vs-seo' },
						{ label: 'Perplexity Ranking Faktoren', slug: 'grundlagen/perplexity-ranking-faktoren' },
						{ label: 'KI-Sichtbarkeit für Coaches', slug: 'grundlagen/ki-sichtbarkeit-fuer-coaches' },
						{ label: 'Perplexity vs. Google', slug: 'grundlagen/perplexity-vs-google' },
						{ label: 'Schema.org für KI', slug: 'grundlagen/schema-org-fuer-ki' },
					],
				},
				{
					label: 'Anleitungen',
					items: [
						{ label: 'llms.txt erstellen', slug: 'anleitungen/llms-txt-erstellen' },
						{ label: 'robots.txt für KI', slug: 'anleitungen/robots-txt-fuer-ki' },
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
						{ label: 'LLM-Optimierung Leitfaden', slug: 'referenz/llm-optimierung' },
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
