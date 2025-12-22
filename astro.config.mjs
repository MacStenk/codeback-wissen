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
				PageSidebar: './src/components/PageSidebar.astro',
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
					autogenerate: { directory: 'grundlagen' },
				},
				{
					label: 'Anleitungen',
					autogenerate: { directory: 'anleitungen' },
				},
				{
					label: 'Tools',
					autogenerate: { directory: 'tools' },
				},
				{
					label: 'Referenz',
					autogenerate: { directory: 'referenz' },
				},
			],
			
			// Customization
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
