# CodeBack Wissensbasis

Fachliches Nachschlagewerk zu LLM-Optimierung, Schema.org und AI Sichtbarkeit für Coaches und Berater im DACH-Raum.

**Live:** https://wissen.codeback.de

## Stack

- [Astro](https://astro.build) + [Starlight](https://starlight.astro.build)
- [starlight-llms-txt](https://github.com/HiDeoo/starlight-llms-txt) - Generiert llms.txt
- [starlight-links-validator](https://github.com/HiDeoo/starlight-links-validator) - Link-Prüfung
- Schema.org JSON-LD (Custom Component)
- VF-1064 Signing (VisionFusen Bunker)

## Development

```bash
# Install
npm install

# Dev Server
npm run dev

# Build
npm run build

# Build + Sign
npm run build:sign

# Preview
npm run preview
```

## Signing

Seiten werden kryptographisch mit VF-1064 signiert. Dafür braucht es:

1. `.env` Datei mit `BUNKER_API_TOKEN`
2. Key "codeback" im VisionFusen Bunker

```bash
# Dry Run (zeigt was signiert würde)
npm run sign:dry

# Signieren
npm run sign
```

## Struktur

```
src/content/docs/
├── grundlagen/          # Was ist LLMO, Schema.org, etc.
├── anleitungen/         # How-tos
├── tools/               # AI Radar, LLM Checker
└── referenz/            # Glossar, FAQ
```

## Related

- [codeback.de](https://codeback.de) - Main Site
- [visionfusen.org](https://visionfusen.org) - Identity Infrastructure
- [stevennoack.de](https://stevennoack.de) - Personal

## License

Content: CC BY 4.0
