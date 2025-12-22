---
title: "robots.txt für KI-Crawler"
description: "Wie du robots.txt richtig konfigurierst damit ChatGPT, Claude und Perplexity deine Website crawlen können."
---

> **Kurzfassung:** Viele Websites blockieren versehentlich KI-Crawler in ihrer robots.txt. Das macht dich unsichtbar für ChatGPT, Perplexity und Claude. Hier erfährst du wie du es richtig machst.

## Das Wichtigste in 30 Sekunden

- robots.txt steuert welche Bots deine Website crawlen dürfen
- Viele Standardkonfigurationen blockieren KI-Crawler
- GPTBot, ClaudeBot, PerplexityBot müssen erlaubt sein
- Einmal falsch konfiguriert = unsichtbar für KI-Assistenten
- Prüfen und anpassen dauert 5 Minuten

## Was ist robots.txt?

Eine Textdatei im Hauptverzeichnis deiner Website die Suchmaschinen und Crawlern sagt was sie dürfen und was nicht.

Erreichbar unter: `https://deine-domain.de/robots.txt`

## Die wichtigsten KI-Crawler

| Crawler | Betreiber | Nutzt für |
|---------|-----------|-----------|
| GPTBot | OpenAI | ChatGPT, GPT-4 |
| ChatGPT-User | OpenAI | ChatGPT Browse-Funktion |
| ClaudeBot | Anthropic | Claude |
| PerplexityBot | Perplexity | Perplexity AI |
| Amazonbot | Amazon | Alexa |
| Meta-ExternalAgent | Meta | Meta AI |

## Problematische Konfigurationen

> 🚨 **Alles blockiert:** ```
> User-agent: *
> Disallow: /
> ```
> Das blockiert ALLE Crawler - auch Google und KI.

> ⚠️ **Nur Google erlaubt:** ```
> User-agent: Googlebot
> Allow: /
>
> User-agent: *
> Disallow: /
> ```
> Google darf rein, aber alle KI-Crawler sind ausgesperrt.

> ⚠️ **CMS-Standard:** Manche WordPress-Themes oder Plugins fügen automatisch Regeln hinzu die KI-Crawler blockieren.

## Die richtige Konfiguration

## So prüfst du deine robots.txt

1. **Datei aufrufen**

   Gehe zu `https://deine-domain.de/robots.txt`

2. **Nach Blockierungen suchen**

   Suche nach:
   - `Disallow: /` ohne vorheriges `User-agent: [spezifisch]`
   - Explizite Blockierungen wie `User-agent: GPTBot` gefolgt von `Disallow: /`

3. **Mit Tool prüfen**

   Der [LLM Readability Checker](/tools/llm-readability-checker/) prüft automatisch ob KI-Crawler blockiert sind.

## Spezielle Bereiche blockieren

Du willst KI-Crawler erlauben, aber bestimmte Bereiche schützen?

```
User-agent: *
Allow: /

# Private Bereiche blockieren
Disallow: /admin/
Disallow: /intern/
Disallow: /mitglieder/
```

Das erlaubt Crawlern den öffentlichen Bereich, schützt aber interne Seiten.

## WordPress-Nutzer

> **Plugin-Einstellungen prüfen:** Viele SEO-Plugins verwalten die robots.txt:
>
> - **Yoast:** SEO → Werkzeuge → Datei-Editor → robots.txt
> - **Rank Math:** Allgemeine Einstellungen → robots.txt bearbeiten
>
> Manche Security-Plugins blockieren automatisch "unbekannte" Bots - das trifft oft KI-Crawler.

## Nach der Änderung

1. **Warten**

   Crawler lesen robots.txt nicht sofort neu. Gib ihnen ein paar Tage.

2. **Prüfen**

   Nach 1-2 Wochen mit [AI Radar](/tools/ai-radar-einfuehrung/) checken ob du sichtbar wirst.

3. **Monitoring**

   Regelmäßig prüfen ob Änderungen durch Updates überschrieben wurden.

## Häufige Fragen

### Muss ich alle KI-Crawler einzeln erlauben?

Nein. `User-agent: * Allow: /` erlaubt alle. Einzeln auflisten ist nur nötig wenn du differenzieren willst.

### Kann ich nur bestimmte KI-Crawler erlauben?

Ja. Du kannst z.B. GPTBot erlauben aber PerplexityBot blockieren. Ob das sinnvoll ist, ist eine andere Frage.

### Schadet es Google wenn ich KI-Crawler erlaube?

Nein. Googlebot ist davon unabhängig. Du kannst beides gleichzeitig erlauben.

### Wie oft sollte ich robots.txt prüfen?

Nach jedem größeren Website-Update und mindestens alle 3 Monate. Plugins und Themes können Änderungen überschreiben.

### Reicht robots.txt für KI-Sichtbarkeit?

Nein. Es ist die Grundvoraussetzung. Ohne Zugang kann keine KI deinen Content lesen. Aber für echte Sichtbarkeit brauchst du auch guten, strukturierten Content.

## Nächste Schritte

<CardGrid>
  <Card title="llms.txt erstellen" icon="document">
    Die nächste Ebene der KI-Optimierung.

    [Zur Anleitung →](/anleitungen/llms-txt-erstellen/)
  </Card>
  <Card title="Sichtbarkeit prüfen" icon="magnifier">
    Check nach 1-2 Wochen.

    [AI Radar →](/tools/ai-radar-einfuehrung/)
  </Card>
</CardGrid>
