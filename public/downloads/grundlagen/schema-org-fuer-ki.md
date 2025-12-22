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

<CardGrid>
  <Card title="Für Menschen" icon="open-book">
    Texte, Bilder, Design - alles was du siehst und liest.
  </Card>
  <Card title="Für Maschinen" icon="setting">
    Schema.org JSON-LD - strukturierte Daten im Hintergrund.
  </Card>
</CardGrid>

Menschen lesen deine Texte und verstehen sie. Maschinen brauchen strukturierte Daten.

Schema.org ist ein standardisiertes Vokabular das sagt:
- "Das ist eine Person"
- "Das ist ihr Beruf"
- "Das sind ihre Angebote"
- "Das ist ihr Standort"

## Warum ist das wichtig für KI?

## Die wichtigsten Schema-Typen

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

## Prüfen ob es funktioniert

<CardGrid>
  <Card title="Google Rich Results Test" icon="magnifier">
    https://search.google.com/test/rich-results

    Zeigt ob dein Markup korrekt ist.
  </Card>
  <Card title="Schema.org Validator" icon="approve-check">
    https://validator.schema.org

    Detaillierte Validierung.
  </Card>
</CardGrid>

## Typische Fehler

> 🚨 **Zu wenig Informationen:** ```json
> // Schlecht
> { "@type": "Person", "name": "Maria" }
>
> // Gut
> { "@type": "Person",
>   "name": "Maria Müller",
>   "jobTitle": "Business Coach",
>   "address": {...}
> }
> ```

> 🚨 **Falscher Typ:** ```json
> // Schlecht - Organization für Einzelperson
> { "@type": "Organization", "name": "Maria Müller" }
>
> // Gut
> { "@type": "Person", "name": "Maria Müller" }
> ```

> ⚠️ **Nicht im Head:** Schema.org muss im `<head>` sein, nicht irgendwo im Body versteckt.

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

1. **Prüfe deine aktuelle Sichtbarkeit**

   [LLM Readability Checker →](/tools/llm-readability-checker/)

2. **Wähle den passenden Schema-Typ**

   Person, Organization, oder Service - je nach deiner Situation.

3. **Erstelle dein JSON-LD**

   Mit den Beispielen oben oder einem Plugin.

4. **Füge es in den Head ein**

   Oder aktiviere es im Plugin.

5. **Teste mit Google Rich Results Test**

   https://search.google.com/test/rich-results
