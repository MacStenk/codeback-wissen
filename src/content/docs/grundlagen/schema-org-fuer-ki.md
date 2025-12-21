---
title: "Schema.org für KI"
description: "Strukturierte Daten die KI-Systeme wirklich lesen können. Was Schema.org ist und wie du es nutzt."
---

## Was ist Schema.org?

Ein standardisiertes Vokabular um Informationen auf Webseiten maschinenlesbar zu machen.

**Einfach gesagt:** Du sagst der Maschine nicht nur "hier steht Text", sondern "hier steht der Name einer Person, ihr Beruf und ihre Adresse".

## Warum ist das wichtig für KI?

Wenn Perplexity oder ChatGPT deine Website besuchen, sehen sie HTML-Code. Ohne Schema.org müssen sie raten was was ist.

**Ohne Schema.org:**
```
Maria Müller
Business Coach
München
```
→ Ist das eine Überschrift? Eine Liste? Ein Absatz?

**Mit Schema.org:**
```
Typ: Person
Name: Maria Müller
Beruf: Business Coach
Ort: München
```
→ Eindeutig: Eine Person namens Maria Müller, Business Coach in München.

## Die wichtigsten Typen

### Für Coaches und Berater

| Typ | Wofür |
|-----|-------|
| Person | Dein Profil |
| Organization | Dein Unternehmen |
| Service | Deine Angebote |
| Article | Blog-Beiträge |
| FAQPage | FAQ-Seiten |
| HowTo | Anleitungen |

### Person (Du selbst)

```json
{
  "@type": "Person",
  "name": "Maria Müller",
  "jobTitle": "Business Coach",
  "description": "Führungskräfte-Coach mit 15 Jahren Erfahrung",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "München"
  },
  "url": "https://maria-mueller.de",
  "sameAs": [
    "https://linkedin.com/in/maria-mueller",
    "https://xing.com/profile/maria_mueller"
  ]
}
```

### Service (Dein Angebot)

```json
{
  "@type": "Service",
  "name": "Business Coaching",
  "description": "1:1 Coaching für Führungskräfte",
  "provider": {
    "@type": "Person",
    "name": "Maria Müller"
  },
  "areaServed": "München und Umgebung",
  "serviceType": "Business Coaching"
}
```

### FAQPage (Häufige Fragen)

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was kostet ein Business Coaching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Business Coaching kostet X € pro Stunde."
      }
    }
  ]
}
```

## Wie einbinden?

Schema.org wird als JSON-LD im `<head>` deiner Seite eingebunden:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Maria Müller",
  ...
}
</script>
```

## Praktische Umsetzung

### Option 1: Website-Baukasten

Viele Baukästen (Squarespace, Wix, WordPress) haben Plugins oder eingebaute Funktionen für Schema.org. Suche nach "Structured Data" oder "Schema" in den Einstellungen.

### Option 2: WordPress Plugin

- Yoast SEO (enthält Schema.org)
- Rank Math (enthält Schema.org)
- Schema Pro (spezialisiert)

### Option 3: Manuell

Für technisch Versierte: JSON-LD direkt im HTML einbinden.

### Option 4: CodeBack

Bei der [LLM-Optimierung von CodeBack](https://codeback.de) wird Schema.org automatisch implementiert.

## Prüfen ob es funktioniert

1. **Google Rich Results Test**
   - Gehe zu: search.google.com/test/rich-results
   - URL eingeben
   - Prüfen ob Schema.org erkannt wird

2. **Schema.org Validator**
   - Gehe zu: validator.schema.org
   - URL oder Code eingeben
   - Fehler beheben

## Häufige Fehler

| Fehler | Lösung |
|--------|--------|
| Fehlende Pflichtfelder | name und @type immer angeben |
| Falsche Typen | Person für Menschen, Organization für Firmen |
| Veraltete Daten | Schema.org aktuell halten |
| Zu viel auf einmal | Mit Person/Organization anfangen |

## Prioritäten

**Zuerst machen:**
1. Person oder Organization (Über-Seite)
2. Service (Angebots-Seiten)

**Dann:**
3. FAQPage (wenn FAQ vorhanden)
4. Article (für Blog-Beiträge)

**Später:**
5. Weitere Typen nach Bedarf

## Der Zusammenhang

Schema.org ist Teil des großen Bildes:

```
llms.txt        → KI findet dich
Schema.org      → KI versteht dich
Guter Content   → KI zitiert dich
```

## Nächste Schritte

- [llms.txt erstellen](/anleitungen/llms-txt-erstellen/) – Ergänzende Maßnahme
- [Website optimieren](/anleitungen/website-optimieren/) – Gesamtübersicht
- [Was ist LLM-Optimierung?](/grundlagen/was-ist-llm-optimierung/) – Kontext
