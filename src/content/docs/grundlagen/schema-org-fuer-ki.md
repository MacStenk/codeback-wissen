---
title: "Schema.org für KI"
description: "Wie du mit Schema.org Markup deine Website für ChatGPT, Perplexity und Claude maschinenlesbar machst."
---

> **Kurzfassung:** Schema.org ist wie eine Visitenkarte für Maschinen. Es sagt KI-Systemen exakt wer du bist, was du machst und für wen - ohne dass sie raten müssen.

## Das Wichtigste in 30 Sekunden

- Schema.org = strukturierte Daten die Maschinen verstehen
- Ohne Schema: KI muss deinen Text interpretieren (fehleranfällig)
- Mit Schema: KI weiß exakt was gemeint ist
- Format: JSON-LD im HTML-Head
- Wichtigste Typen: Person, Organization, Service, FAQPage

## Was ist Schema.org?

```
┌─────────────────────────────────────────────────────┐
│                    Deine Website                     │
├─────────────────────────────────────────────────────┤
│                                                      │
│  Für Menschen:        Für Maschinen:                │
│  ┌─────────────┐      ┌─────────────┐               │
│  │   Texte     │      │ Schema.org  │               │
│  │   Bilder    │      │   JSON-LD   │               │
│  │   Design    │      │             │               │
│  └─────────────┘      └─────────────┘               │
│                                                      │
└─────────────────────────────────────────────────────┘
```

Menschen lesen deine Texte und verstehen sie. Maschinen brauchen strukturierte Daten.

Schema.org ist ein standardisiertes Vokabular das sagt:
- "Das ist eine Person"
- "Das ist ihr Beruf"
- "Das sind ihre Angebote"
- "Das ist ihr Standort"

## Warum ist das wichtig für KI?

**Ohne Schema.org:**

```
KI liest: "Herzlich willkommen! Ich begleite Sie 
auf Ihrem Weg zum Erfolg..."

KI denkt: "Irgendwas mit Coaching? Vielleicht? 
Keine konkreten Daten. Kann ich nicht zitieren."
```

**Mit Schema.org:**

```json
{
  "@type": "Person",
  "name": "Maria Müller",
  "jobTitle": "Business Coach",
  "address": { "addressLocality": "München" }
}
```

```
KI weiß: "Maria Müller, Business Coach, München. 
Kann ich empfehlen wenn jemand nach Coach in München fragt."
```

## Die wichtigsten Schema-Typen

### Für Personen (Coaches, Berater, Experten)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Maria Müller",
  "jobTitle": "Business Coach",
  "description": "Führungskräfte-Coaching für den Mittelstand",
  "url": "https://example.com",
  "email": "mail@example.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "München",
    "addressCountry": "DE"
  },
  "sameAs": [
    "https://linkedin.com/in/example",
    "https://xing.com/profile/example"
  ]
}
```

### Für Unternehmen/Organisationen

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Müller Coaching GmbH",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "description": "Business Coaching für Führungskräfte",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 1",
    "addressLocality": "München",
    "postalCode": "80331",
    "addressCountry": "DE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-89-123456",
    "contactType": "customer service"
  }
}
```

### Für Services/Angebote

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "1:1 Führungskräfte-Coaching",
  "description": "Individuelles Coaching für neue Führungskräfte",
  "provider": {
    "@type": "Person",
    "name": "Maria Müller"
  },
  "areaServed": "München",
  "serviceType": "Business Coaching"
}
```

### Für FAQ-Seiten

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was kostet ein Coaching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Coaching kostet 180€ pro Stunde."
      }
    },
    {
      "@type": "Question", 
      "name": "Wie lange dauert ein Coaching-Prozess?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typischerweise 6-10 Sitzungen über 3-6 Monate."
      }
    }
  ]
}
```

## Wo kommt der Code hin?

```html
<!DOCTYPE html>
<html>
<head>
  <title>Maria Müller - Business Coach</title>
  
  <!-- Schema.org JSON-LD hier einfügen -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Maria Müller",
    ...
  }
  </script>
  
</head>
<body>
  ...
</body>
</html>
```

## Implementierung nach System

| System | Methode |
|--------|---------|
| WordPress | Plugin (Yoast SEO, Rank Math) |
| Squarespace | Code-Injection im Header |
| Wix | Custom Code im Head |
| Webflow | Custom Code in Page Settings |
| Statische Seiten | Direkt im HTML |
| Astro/Next.js | Component im Head |

### WordPress mit Yoast SEO

1. Yoast SEO installieren
2. SEO → Darstellung in der Suche → Inhaltstypen
3. Schema-Typ pro Seitentyp einstellen
4. Unter jeder Seite: Yoast-Box → Schema-Tab

### Manuell

1. JSON-LD Code erstellen (siehe Beispiele oben)
2. In den `<head>` deiner Seite einfügen
3. Mit Google Rich Results Test prüfen

## Prüfen ob es funktioniert

**Google Rich Results Test:**
https://search.google.com/test/rich-results

**Schema.org Validator:**
https://validator.schema.org

Beide zeigen dir ob dein Markup korrekt ist und von Maschinen gelesen werden kann.

## Typische Fehler

**Fehler 1: Zu wenig Informationen**
```json
// Schlecht
{ "@type": "Person", "name": "Maria" }

// Gut
{ "@type": "Person", 
  "name": "Maria Müller",
  "jobTitle": "Business Coach",
  "address": {...}
}
```

**Fehler 2: Falscher Typ**
```json
// Schlecht - Organization für Einzelperson
{ "@type": "Organization", "name": "Maria Müller" }

// Gut
{ "@type": "Person", "name": "Maria Müller" }
```

**Fehler 3: Nicht im Head**
Schema.org muss im `<head>` sein, nicht irgendwo im Body versteckt.

## Häufige Fragen

### Brauche ich alle Schema-Typen?

Nein. Starte mit dem wichtigsten (Person oder Organization). Füge später Service und FAQPage hinzu.

### Schadet falsches Schema meinem Ranking?

Bei Google: möglicherweise. Bei KI: du wirst falsch kategorisiert oder ignoriert. Lieber weniger aber korrekt.

### Kann ich Schema.org ohne Programmierkenntnisse einbauen?

Ja. Mit WordPress-Plugins ist es klickbar. Für andere Systeme brauchst du Zugang zum HTML-Head.

### Wie oft muss ich Schema.org aktualisieren?

Bei Änderungen an den Fakten (neuer Standort, neue Angebote). Nicht ständig nötig.

## Nächste Schritte

1. [Prüfe deine aktuelle Sichtbarkeit](/tools/llm-readability-checker/)
2. Wähle den passenden Schema-Typ (Person, Organization, Service)
3. Erstelle dein JSON-LD mit den Beispielen oben
4. Füge es in den Head deiner Website ein
5. Teste mit dem Google Rich Results Test
