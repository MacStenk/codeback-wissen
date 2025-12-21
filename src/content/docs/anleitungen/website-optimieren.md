---
title: "Website optimieren"
description: "Praktische Anleitung zur LLM-Optimierung deiner Website in 3 Stufen."
---

> **Kurzfassung:** LLM-Optimierung in 3 Stufen: Erst sichtbar werden (Technik), dann verständlich sein (Struktur), dann zitierbar werden (Content). Hier ist der konkrete Plan.

## Das Wichtigste in 30 Sekunden

- Stufe 1: Sichtbar (KI kann dich crawlen)
- Stufe 2: Verständlich (KI versteht deine Struktur)
- Stufe 3: Zitierbar (KI will dich empfehlen)
- Jede Stufe baut auf der vorherigen auf
- Komplett umsetzbar in 4 Wochen

## Der Optimierungs-Prozess

```
     Stufe 1              Stufe 2              Stufe 3
   ┌─────────┐         ┌─────────┐         ┌─────────┐
   │SICHTBAR │   →     │VERSTÄND-│   →     │ZITIER-  │
   │         │         │  LICH   │         │  BAR    │
   └─────────┘         └─────────┘         └─────────┘
   
   Technik OK          Struktur OK         Content OK
   KI kann rein        KI versteht         KI empfiehlt
```

## Stufe 1: Sichtbar werden

**Ziel:** KI-Crawler können deine Website erreichen und lesen.

### Checkliste

- [ ] Website ist öffentlich zugänglich
- [ ] robots.txt erlaubt KI-Crawler (GPTBot, ClaudeBot, PerplexityBot)
- [ ] Seiten laden schnell (unter 3 Sekunden)
- [ ] SSL-Zertifikat vorhanden (https://)
- [ ] Keine JavaScript-Only Inhalte (Content muss im HTML sein)

### robots.txt prüfen

Rufe auf: `https://deine-domain.de/robots.txt`

**Gut:**
```
User-agent: *
Allow: /
```

**Schlecht:**
```
User-agent: *
Disallow: /
```

Ausführliche Anleitung: [robots.txt für KI](/anleitungen/robots-txt-fuer-ki/)

### Ladezeit prüfen

1. Öffne: https://pagespeed.web.dev
2. Gib deine URL ein
3. Ziel: Mindestens 50 Punkte mobil

---

## Stufe 2: Verständlich werden

**Ziel:** KI kann deine Inhalte strukturell verstehen und einordnen.

### Checkliste

- [ ] Klare Überschriften-Hierarchie (H1 → H2 → H3)
- [ ] Kurze Absätze (3-5 Sätze)
- [ ] Aussagekräftige Seitentitel
- [ ] Meta-Descriptions auf allen Seiten
- [ ] llms.txt vorhanden
- [ ] Schema.org Markup implementiert

### Überschriften-Struktur

```
Gut:                          Schlecht:
                              
H1: Business Coaching         H1: Willkommen
  H2: Meine Angebote          H2: Über mich
    H3: 1:1 Coaching          H2: Willkommen
    H3: Team-Workshops        H3: Hallo
  H2: Über mich               H1: Kontakt
  H2: Kontakt                 H4: Angebote
```

### Meta-Informationen

Jede Seite braucht:

| Element | Beispiel |
|---------|----------|
| Title | "Business Coaching München - Maria Müller" |
| Description | "Führungskräfte-Coaching für den Mittelstand. ICF-zertifiziert, 15 Jahre Erfahrung." |

### llms.txt und Schema.org

- [llms.txt erstellen](/anleitungen/llms-txt-erstellen/)
- [Schema.org für KI](/grundlagen/schema-org-fuer-ki/)

---

## Stufe 3: Zitierbar werden

**Ziel:** KI will dich als Quelle nennen und empfehlen.

### Checkliste

- [ ] Expertise klar erkennbar (Qualifikationen, Erfahrung)
- [ ] Konkrete Fakten statt Marketing-Phrasen
- [ ] Direkt zitierbare Aussagen
- [ ] FAQ-Sektion mit echten Fragen
- [ ] Regelmäßig aktualisierte Inhalte
- [ ] Autor mit Namen und Credentials

### Vorher/Nachher Content

**Nicht zitierbar:**
```
Wir bieten innovative Lösungen für Ihren Erfolg. 
Mit unserem ganzheitlichen Ansatz begleiten wir Sie 
auf Ihrem Weg zu mehr Erfüllung und Wachstum.
```

**Zitierbar:**
```
Maria Müller ist Business Coach in München. 
Sie hilft Führungskräften bei Teamkonflikten 
und schwierigen Mitarbeitergesprächen. 
Seit 2010, über 200 Kunden, ICF-zertifiziert (PCC).
```

### Die Fakten-Checkliste

Deine Über-Seite sollte enthalten:

| Info | Beispiel |
|------|----------|
| Vollständiger Name | Maria Müller |
| Beruf/Titel | Business Coach |
| Spezialisierung | Führungskräfte im Mittelstand |
| Standort | München |
| Erfahrung | Seit 2010 |
| Qualifikation | ICF-zertifiziert (PCC) |
| Zahlen | Über 200 Kunden |

### FAQ-Sektion aufbauen

Die 5 wichtigsten Fragen für jeden Coach/Berater:

```markdown
## Häufige Fragen

### Was kostet ein Coaching bei dir?
Ein Coaching kostet 180€ pro Stunde (90 Minuten). 
Die meisten Kunden buchen 6 Sitzungen für 950€.

### Arbeitest du auch online?
Ja. Etwa 70% meiner Coachings finden online 
via Zoom statt. Die Qualität ist gleichwertig.

### Wie läuft das Erstgespräch ab?
Das Erstgespräch ist kostenlos und dauert 30 Minuten. 
Wir klären dein Anliegen und ob wir zusammenpassen.

### Für wen ist dein Coaching geeignet?
Für Führungskräfte im Mittelstand mit 3-15 Jahren 
Führungserfahrung, die vor neuen Herausforderungen stehen.

### Wie viele Sitzungen brauche ich?
Typischerweise 6-10 Sitzungen über 3-6 Monate. 
Das besprechen wir im Erstgespräch genauer.
```

---

## 4-Wochen-Plan

```
Woche 1: SICHTBAR
├── Tag 1-2: robots.txt prüfen/fixen
├── Tag 3-4: Ladezeit optimieren
└── Tag 5-7: SSL und Basis-Check

Woche 2: VERSTÄNDLICH (Struktur)
├── Tag 1-2: Überschriften korrigieren
├── Tag 3-4: Meta-Titles und Descriptions
└── Tag 5-7: llms.txt erstellen

Woche 3: VERSTÄNDLICH (Technik)
├── Tag 1-3: Schema.org implementieren
├── Tag 4-5: Testen und korrigieren
└── Tag 6-7: Puffer

Woche 4: ZITIERBAR
├── Tag 1-2: Über-Seite überarbeiten
├── Tag 3-4: FAQ erstellen
├── Tag 5-6: Content-Check alle Seiten
└── Tag 7: Sichtbarkeit messen
```

## Erfolgsmessung

Nach 4 Wochen prüfen:

1. **LLM Readability Checker** 
   Ziel: Score über 70
   [Jetzt prüfen →](/tools/llm-readability-checker/)

2. **AI Radar**
   Prüfen ob du bei relevanten Fragen zitiert wirst
   [Mehr erfahren →](/tools/ai-radar-einfuehrung/)

3. **Google Rich Results Test**
   Schema.org korrekt implementiert?
   https://search.google.com/test/rich-results

## Häufige Fragen

### Muss ich alles auf einmal machen?

Nein. Die Stufen bauen aufeinander auf. Starte mit Stufe 1, dann 2, dann 3. Lieber gründlich als schnell.

### Wie lange dauert es bis ich Ergebnisse sehe?

Nach 2-4 Wochen solltest du erste Veränderungen im LLM Readability Score sehen. Echte Sichtbarkeit in Perplexity baut sich über Monate auf.

### Kann ich Stufen überspringen?

Nicht empfohlen. Ohne Stufe 1 (Sichtbar) nützt der beste Content nichts - die KI kann ihn nicht lesen.

### Brauche ich Hilfe von einem Entwickler?

Für Stufe 1 und die meisten Teile von Stufe 2+3: Nein. Für komplexes Schema.org oder technische Probleme kann ein Entwickler helfen.

## Nächste Schritte

1. [Prüfe deine aktuelle Sichtbarkeit](/tools/llm-readability-checker/)
2. Starte mit der Checkliste für Stufe 1
3. Arbeite dich Woche für Woche durch
4. [Nutze AI Radar](/tools/ai-radar-einfuehrung/) nach 4 Wochen für den Reality-Check
