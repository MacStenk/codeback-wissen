---
title: "LLM Readability Checker"
description: "Was der LLM Readability Checker prüft und wie du deinen Score interpretierst."
---

> **Kurzfassung:** Der LLM Readability Checker gibt dir einen Score von 0-100 der zeigt wie gut deine Website für KI-Systeme lesbar ist. Kostenlos, sofort, ohne Anmeldung.

## Das Wichtigste in 30 Sekunden

- Prüft: Ist deine Website bereit für ChatGPT, Perplexity, Claude?
- Score: 0-100 (je höher, desto besser)
- Bereiche: Technik, Struktur, Meta-Daten, LLM-spezifisch
- Kostenlos und ohne Anmeldung
- Ergebnis in Sekunden

## Was wird geprüft

```
┌─────────────────────────────────────────────────────┐
│                 LLM Readability Check               │
├─────────────────────────────────────────────────────┤
│                                                      │
│  1. ROBOTS         Dürfen KI-Crawler rein?          │
│     ──────────────────────────────────────          │
│     GPTBot, ClaudeBot, PerplexityBot erlaubt?       │
│                                                      │
│  2. LLMS.TXT       Gibt es eine llms.txt?           │
│     ──────────────────────────────────────          │
│     Vorhanden? Vollständig? Gut strukturiert?       │
│                                                      │
│  3. SCHEMA.ORG     Strukturierte Daten?             │
│     ──────────────────────────────────────          │
│     JSON-LD vorhanden? Welche Typen? Vollständig?   │
│                                                      │
│  4. CONTENT        Ist der Content zitierbar?       │
│     ──────────────────────────────────────          │
│     Struktur, Klarheit, Meta-Daten                  │
│                                                      │
└─────────────────────────────────────────────────────┘
```

### Bereich 1: Robots (0-100)

Prüft ob KI-Crawler deine Website besuchen dürfen.

| Prüfpunkt | Gut | Schlecht |
|-----------|-----|----------|
| robots.txt | `Allow: /` | `Disallow: /` |
| GPTBot | Erlaubt | Blockiert |
| ClaudeBot | Erlaubt | Blockiert |
| PerplexityBot | Erlaubt | Blockiert |

**Score 100:** Alle Crawler erlaubt
**Score 0:** Alle Crawler blockiert

### Bereich 2: llms.txt (0-100)

Prüft ob und wie gut deine llms.txt ist.

| Prüfpunkt | Punkte |
|-----------|--------|
| llms.txt existiert | +30 |
| Enthält Beschreibung | +20 |
| Enthält Kontakt | +15 |
| Enthält Seitenlinks | +15 |
| Gut strukturiert | +20 |

**Score 0:** Keine llms.txt vorhanden

### Bereich 3: Schema.org (0-100)

Prüft strukturierte Daten.

| Prüfpunkt | Punkte |
|-----------|--------|
| JSON-LD vorhanden | +30 |
| Person oder Organization | +25 |
| Kontaktdaten | +15 |
| Service/Angebote | +15 |
| Breadcrumbs | +15 |

**Score 0:** Kein Schema.org gefunden

### Bereich 4: Content (0-100)

Prüft die Content-Qualität für KI.

| Prüfpunkt | Punkte |
|-----------|--------|
| Meta-Title vorhanden | +20 |
| Meta-Description | +20 |
| H1 Überschrift | +15 |
| Klare Struktur (H2, H3) | +20 |
| Ausreichend Content | +25 |

## Gesamt-Score

```
     Gesamt-Score = Durchschnitt aller Bereiche
     
     ┌─────────────────────────────────────────┐
     │                                         │
     │   Robots:  100  ──┐                     │
     │   llms.txt: 65  ──┼──►  Gesamt: 82     │
     │   Schema:   90  ──┤                     │
     │   Content:  75  ──┘                     │
     │                                         │
     └─────────────────────────────────────────┘
```

## Score-Interpretation

| Score | Bewertung | Was tun |
|-------|-----------|---------|
| 90-100 | Exzellent | Weiter so, nur Details verbessern |
| 70-89 | Gut | Gezielt Schwachstellen angehen |
| 50-69 | Mittel | Systematisch optimieren |
| 30-49 | Schwach | Dringend handeln |
| 0-29 | Kritisch | Grundlagen fehlen komplett |

## Beispiel-Ergebnisse

### Beispiel 1: Gut optimierte Seite

```
Domain: example-coach.de
────────────────────────────────
Gesamt-Score: 84

Robots:     100  Alle Crawler erlaubt
llms.txt:    65  Vorhanden, ausbaufähig
Schema:      90  Person + Service
Content:     75  Gute Struktur

Empfehlung: llms.txt erweitern
```

### Beispiel 2: Typische WordPress-Seite

```
Domain: wordpress-coach.de
────────────────────────────────
Gesamt-Score: 52

Robots:     100  OK
llms.txt:     0  Fehlt komplett
Schema:      48  Nur Basics via Plugin
Content:     60  Meta-Daten unvollständig

Empfehlung: llms.txt erstellen, 
            Schema.org erweitern
```

### Beispiel 3: Problematische Seite

```
Domain: problem-site.de
────────────────────────────────
Gesamt-Score: 23

Robots:      50  GPTBot blockiert
llms.txt:     0  Fehlt
Schema:       0  Fehlt
Content:     40  Kaum Struktur

Empfehlung: Grundlagen fehlen,
            komplett überarbeiten
```

## Nach dem Check: Was tun?

### Score unter 50

1. [robots.txt für KI konfigurieren](/anleitungen/robots-txt-fuer-ki/)
2. [llms.txt erstellen](/anleitungen/llms-txt-erstellen/)
3. Erneut prüfen

### Score 50-70

1. Schwächsten Bereich identifizieren
2. Gezielt verbessern:
   - llms.txt schwach? → [Anleitung](/anleitungen/llms-txt-erstellen/)
   - Schema.org schwach? → [Anleitung](/grundlagen/schema-org-fuer-ki/)
   - Content schwach? → [Website optimieren](/anleitungen/website-optimieren/)
3. Erneut prüfen

### Score über 70

1. Details verbessern
2. [AI Radar](/tools/ai-radar-einfuehrung/) für Reality-Check nutzen
3. Regelmäßig monitoren

## Häufige Fragen

### Wie oft sollte ich prüfen?

Nach jeder größeren Änderung und alle 4-8 Wochen zur Kontrolle.

### Garantiert ein hoher Score dass ich zitiert werde?

Nein. Der Score zeigt dass du technisch bereit bist. Ob du zitiert wirst, hängt auch von Content-Relevanz und Wettbewerb ab. Für den Reality-Check nutze [AI Radar](/tools/ai-radar-einfuehrung/).

### Warum hat meine Seite einen niedrigen Content-Score?

Häufige Gründe:
- Meta-Description fehlt
- Keine klare H1-Überschrift
- Zu wenig strukturierter Text
- Keine H2/H3 Unterüberschriften

### Kann ich den Score manipulieren?

Technisch ja, aber sinnlos. Der Score zeigt ob du für KI lesbar bist. Manipulation ohne echte Verbesserung bringt nichts.

### Ist der Checker kostenlos?

Ja. Unbegrenzt, ohne Anmeldung.

## Nächste Schritte

1. Prüfe deine Website mit dem [LLM Readability Checker auf CodeBack.de](https://codeback.de/llm-checker)
2. Notiere deinen Score und die Schwachstellen
3. Arbeite die Schwachstellen ab mit den Anleitungen hier
4. Prüfe erneut nach den Verbesserungen
5. Ab Score 70: Nutze [AI Radar](/tools/ai-radar-einfuehrung/) für den Reality-Check
