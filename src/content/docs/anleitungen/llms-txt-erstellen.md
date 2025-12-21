---
title: "llms.txt erstellen"
description: "Schritt-für-Schritt Anleitung zum Erstellen deiner llms.txt Datei für bessere KI-Sichtbarkeit."
---

> **Kurzfassung:** llms.txt ist eine Textdatei die KI-Systemen direkt erklärt wer du bist und was du anbietest. Wie eine Visitenkarte für ChatGPT, Perplexity und Claude.

## Das Wichtigste in 30 Sekunden

- llms.txt = Textdatei im Hauptverzeichnis deiner Website
- Erklärt KI-Systemen wer du bist und was du machst
- Einfaches Markdown-Format
- Erreichbar unter: `deine-domain.de/llms.txt`
- Dauert 15-30 Minuten zum Erstellen

## Was ist llms.txt?

```
┌─────────────────────────────────────────────────────┐
│                                                      │
│   robots.txt    →  Sagt Crawlern was sie dürfen     │
│   sitemap.xml   →  Zeigt alle Seiten der Website    │
│   llms.txt      →  Erklärt KI wer du bist           │
│                                                      │
└─────────────────────────────────────────────────────┘
```

Während robots.txt technische Regeln definiert, ist llms.txt inhaltlich. Sie beantwortet:

- Wer bist du?
- Was machst du?
- Für wen?
- Was sind deine wichtigsten Inhalte?

## Die drei Varianten

| Datei | Zweck | Länge |
|-------|-------|-------|
| llms.txt | Übersicht mit Links | Kurz (1 Seite) |
| llms-full.txt | Komplette Inhalte | Lang (alles) |
| llms-small.txt | Minimale Version | Sehr kurz |

Für die meisten reicht **llms.txt** als Einstieg.

## Grundstruktur

```markdown
# [Dein Name/Firma]

> [Ein Satz der alles zusammenfasst]

## Über mich/uns

[2-3 Sätze wer du bist und was du machst]

## Angebote

- [Angebot 1]: [Kurzbeschreibung]
- [Angebot 2]: [Kurzbeschreibung]
- [Angebot 3]: [Kurzbeschreibung]

## Wichtige Seiten

- [/ueber-mich](/ueber-mich): Mehr über mich
- [/angebote](/angebote): Alle Leistungen
- [/kontakt](/kontakt): Kontaktmöglichkeiten

## Kontakt

[Wie man dich erreicht]
```

## Beispiel: Coach

```markdown
# Maria Müller - Business Coach

> Business Coaching für Führungskräfte im Mittelstand. 
> München und online.

## Über mich

Maria Müller ist Business Coach mit ICF-Zertifizierung (PCC). 
Seit 2010 begleitet sie Führungskräfte bei Teamkonflikten, 
schwierigen Gesprächen und dem Einstieg in neue Führungsrollen. 
Über 200 Kunden in 15 Jahren.

## Angebote

- 1:1 Führungskräfte-Coaching: Individuelles Coaching für 
  Führungskräfte, 90 Minuten pro Sitzung, online oder vor Ort
- Team-Workshops: Halbtägige Workshops für Teams bis 12 Personen
- Konflikt-Mediation: Begleitung bei Teamkonflikten

## Für wen

- Neue Führungskräfte (erste 100 Tage)
- Erfahrene Führungskräfte vor neuen Herausforderungen
- Teams mit Kommunikationsproblemen

## Wichtige Seiten

- [/ueber-mich](/ueber-mich): Mein Werdegang und Qualifikationen
- [/coaching](/coaching): Details zum Coaching-Prozess
- [/workshops](/workshops): Team-Workshop Formate
- [/blog](/blog): Artikel zu Führungsthemen

## Kontakt

Maria Müller
E-Mail: mail@example.com
Telefon: +49 89 123456
Standort: München (Schwabing)
Online: Zoom-Coaching möglich
```

## Beispiel: Berater

```markdown
# Schmidt Consulting

> Strategieberatung für mittelständische IT-Unternehmen. 
> Fokus auf Digitalisierung und Prozessoptimierung.

## Über uns

Schmidt Consulting unterstützt IT-Mittelständler bei der 
digitalen Transformation. Gegründet 2015 von Thomas Schmidt, 
heute 8 Berater mit Branchenfokus auf Software und IT-Services.

## Leistungen

- Digitalstrategie: Entwicklung von Digitalisierungs-Roadmaps
- Prozessoptimierung: Analyse und Verbesserung von Abläufen
- M&A Beratung: Due Diligence und Integration bei Übernahmen

## Wichtige Seiten

- [/team](/team): Unsere Berater
- [/referenzen](/referenzen): Projektbeispiele
- [/kontakt](/kontakt): Erstgespräch vereinbaren
```

## So erstellst du deine llms.txt

### Schritt 1: Datei erstellen

Erstelle eine neue Textdatei namens `llms.txt`

### Schritt 2: Inhalte schreiben

Nutze die Vorlage oben. Ersetze die Platzhalter mit deinen Infos.

**Wichtig:**
- Klartext, keine Marketing-Floskeln
- Konkrete Fakten (Jahre, Zahlen, Orte)
- Kurze Sätze

### Schritt 3: Hochladen

Lade die Datei ins Hauptverzeichnis deiner Website:

```
https://deine-domain.de/llms.txt
```

### Schritt 4: Prüfen

Rufe `https://deine-domain.de/llms.txt` im Browser auf. Wird der Inhalt angezeigt? Dann funktioniert es.

## Hochladen nach System

| System | Methode |
|--------|---------|
| WordPress | FTP oder Dateimanager im Hosting |
| Squarespace | Nicht direkt möglich (Workaround: Seite erstellen) |
| Wix | Nicht direkt möglich |
| Webflow | Projekt-Einstellungen → Custom Code |
| Hosting (Hetzner, etc.) | FTP/SFTP Upload |
| Netlify/Vercel | In /public oder /static Ordner |

### WordPress via FTP

1. FTP-Programm öffnen (FileZilla, Cyberduck)
2. Mit Server verbinden
3. In den Ordner navigieren wo `wp-config.php` liegt
4. `llms.txt` hochladen
5. Fertig

## Häufige Fehler

**Fehler 1: Falscher Ort**
```
Falsch: deine-domain.de/pages/llms.txt
Richtig: deine-domain.de/llms.txt
```

**Fehler 2: Falsche Dateiendung**
```
Falsch: llms.txt.txt oder llms.md
Richtig: llms.txt
```

**Fehler 3: Zu vage**
```
Falsch: "Wir bieten innovative Lösungen"
Richtig: "Wir entwickeln CRM-Systeme für Handwerksbetriebe"
```

**Fehler 4: Zu lang**
Die Hauptdatei llms.txt sollte übersichtlich bleiben. Details gehören auf die verlinkten Seiten.

## Häufige Fragen

### Ist llms.txt ein offizieller Standard?

Es entwickelt sich gerade zum Standard. Anthropic und andere unterstützen es. Je mehr Websites es nutzen, desto mehr wird es berücksichtigt.

### Lesen alle KI-Systeme llms.txt?

Noch nicht alle. Aber die Unterstützung wächst. Und es schadet nie, die Datei zu haben.

### Wie oft muss ich llms.txt aktualisieren?

Bei größeren Änderungen an deinem Angebot oder deiner Positionierung. Nicht ständig nötig.

### Kann ich mehrere Sprachen haben?

Ja. Du kannst `llms.txt` (Deutsch) und `llms-en.txt` (Englisch) anlegen.

### Ersetzt llms.txt Schema.org?

Nein. Beides ergänzt sich. Schema.org ist technischer und strukturierter. llms.txt ist lesbarer und erklärender.

## Nächste Schritte

1. Erstelle deine llms.txt mit der Vorlage oben
2. Lade sie ins Hauptverzeichnis hoch
3. Prüfe ob sie unter `deine-domain.de/llms.txt` erreichbar ist
4. [Implementiere Schema.org](/grundlagen/schema-org-fuer-ki/) als Ergänzung
5. [Prüfe deine Sichtbarkeit](/tools/llm-readability-checker/) nach 1-2 Wochen
