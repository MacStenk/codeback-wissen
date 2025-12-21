---
title: "AI Radar Einführung"
description: "Wie AI Radar funktioniert und was dir die Sichtbarkeits-Analyse zeigt."
---

> **Kurzfassung:** AI Radar zeigt dir ob und wo du bei Perplexity zitiert wirst. Es ist der Reality-Check für deine LLM-Optimierung - nicht ob deine Technik stimmt, sondern ob du tatsächlich empfohlen wirst.

## Das Wichtigste in 30 Sekunden

- AI Radar prüft deine Sichtbarkeit bei Perplexity
- Zeigt: Wirst du zitiert? Bei welchen Fragen? Auf welcher Position?
- Unterschied zu LLM Readability: Radar = Ergebnis, Readability = Technik
- Kostet wenige Cent pro Abfrage
- Wichtig für den Reality-Check nach der Optimierung

## Was AI Radar macht

```
┌─────────────────────────────────────────────────────┐
│                                                      │
│   Deine Domain    →    AI Radar    →    Report      │
│   "example.com"        fragt            "Du wirst   │
│                        Perplexity        bei 3 von  │
│                        mit relevanten    10 Queries │
│                        Queries           zitiert"   │
│                                                      │
└─────────────────────────────────────────────────────┘
```

AI Radar simuliert echte Nutzer-Fragen und prüft ob Perplexity dich als Quelle nennt.

## Die 4 Funktionen

### 1. Visibility Check

**Was:** Schnellprüfung für eine einzelne Frage

**Beispiel:**
```
Query: "Business Coach München Führungskräfte"
Ergebnis: Du wirst auf Position 2 zitiert
```

### 2. Query Generator

**Was:** Generiert relevante Fragen für deine Domain automatisch

**Beispiel für einen Coach:**
```
- "Business Coach München Empfehlung"
- "Führungskräfte Coaching Kosten"
- "Coach für neue Führungskräfte"
- "Teamkonflikt Coach gesucht"
```

### 3. Full Audit

**Was:** Prüft deine Sichtbarkeit für 10-20 relevante Queries

**Beispiel-Report:**

```
Domain: example.com
Queries geprüft: 15
─────────────────────────────────────────
Sichtbar bei:     3 Queries (20%)
Nicht sichtbar:  12 Queries (80%)

Details:
Query                              Position
────────────────────────────────────────────
"Business Coach München"           #2
"Führungskräfte Coaching"          #4  
"Executive Coach Bayern"           #1
"Team Workshop Anbieter"           nicht gefunden
"Coaching für Manager"             nicht gefunden
...
```

### 4. Timeline/History

**Was:** Zeigt Veränderungen über Zeit

**Nutzen:** Nach Optimierungen siehst du ob deine Sichtbarkeit steigt.

```
Monat      Sichtbar bei
──────────────────────────
Oktober    1 von 15 (7%)
November   3 von 15 (20%)
Dezember   5 von 15 (33%)
           ↑ Optimierung wirkt
```

## Score-Interpretation

| Score | Bedeutung | Handlung |
|-------|-----------|----------|
| 0-20% | Kaum sichtbar | Dringend optimieren |
| 20-40% | Teilweise sichtbar | Gezielt Lücken füllen |
| 40-60% | Gut sichtbar | Weiter optimieren |
| 60-80% | Sehr gut | Halten und ausbauen |
| 80-100% | Exzellent | Marktführer-Position |

## AI Radar vs. LLM Readability Checker

```
┌────────────────────┐     ┌────────────────────┐
│  LLM Readability   │     │     AI Radar       │
│     Checker        │     │                    │
├────────────────────┤     ├────────────────────┤
│                    │     │                    │
│  Prüft: Technik    │     │  Prüft: Ergebnis   │
│                    │     │                    │
│  - robots.txt      │     │  - Wirst du        │
│  - Schema.org      │     │    zitiert?        │
│  - llms.txt        │     │  - Bei welchen     │
│  - Content         │     │    Fragen?         │
│                    │     │  - Auf welcher     │
│                    │     │    Position?       │
├────────────────────┤     ├────────────────────┤
│  Kostenlos         │     │  Kostenpflichtig   │
│                    │     │  (wenige Cent)     │
└────────────────────┘     └────────────────────┘

         │                          │
         ▼                          ▼
   "Bist du bereit       "Wirst du tatsächlich
    für KI-Crawler?"       empfohlen?"
```

**Nutze beide:**
1. LLM Readability Checker → Technik in Ordnung bringen
2. AI Radar → Prüfen ob es auch funktioniert

## Wann AI Radar nutzen

**Vor der Optimierung:**
Baseline ermitteln. Wo stehst du jetzt?

**Nach der Optimierung:**
Reality-Check. Hat es funktioniert?

**Regelmäßig:**
Alle 4-8 Wochen prüfen ob die Sichtbarkeit stabil bleibt oder wächst.

## Was tun mit den Ergebnissen

### Du wirst nicht zitiert

1. [Prüfe LLM Readability](/tools/llm-readability-checker/) - Technik OK?
2. [Optimiere deine Website](/anleitungen/website-optimieren/)
3. Warte 2-4 Wochen
4. Prüfe erneut mit AI Radar

### Du wirst teilweise zitiert

1. Analysiere: Bei welchen Queries wirst du gefunden, bei welchen nicht?
2. Erstelle Content für die Lücken
3. Prüfe erneut nach 2-4 Wochen

### Du wirst oft zitiert

1. Weiter so
2. Beobachte die Timeline
3. Reagiere wenn Sichtbarkeit sinkt

## Häufige Fragen

### Wie oft sollte ich AI Radar nutzen?

Nach größeren Optimierungen und alle 4-8 Wochen zur Kontrolle. Nicht täglich - Veränderungen brauchen Zeit.

### Warum bin ich trotz gutem LLM Readability Score nicht sichtbar?

LLM Readability prüft die Technik. AI Radar prüft das Ergebnis. Gute Technik ist Voraussetzung, aber keine Garantie. Content und Relevanz spielen auch eine Rolle.

### Ist Sichtbarkeit bei Perplexity das gleiche wie bei ChatGPT?

Ähnlich, aber nicht identisch. Perplexity ist am transparentesten mit Quellen. ChatGPT zeigt weniger Quelleninfos. Wer bei Perplexity sichtbar ist, hat gute Chancen auch bei anderen.

### Was kostet AI Radar?

Wenige Cent pro Abfrage. Ein Full Audit mit 15 Queries kostet typischerweise unter 1€.

## Nächste Schritte

1. [Prüfe erst deine LLM Readability](/tools/llm-readability-checker/) (kostenlos)
2. Wenn Score über 60: AI Radar für Reality-Check nutzen
3. Ergebnisse analysieren
4. Gezielt optimieren wo Lücken sind
5. Nach 4 Wochen erneut prüfen
