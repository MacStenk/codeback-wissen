---
title: "Erste Schritte zur AI-Sichtbarkeit"
description: "Der Einsteigerguide für KI-Sichtbarkeit. Was du als erstes tun solltest um von ChatGPT und Perplexity gefunden zu werden."
---

> **Kurzfassung:** Du musst nicht alles auf einmal machen. Hier sind die 5 wichtigsten ersten Schritte - in der richtigen Reihenfolge.

## Das Wichtigste in 30 Sekunden

- Schritt 1: Prüfen ob KI dich überhaupt crawlen darf (robots.txt)
- Schritt 2: Klartext auf deiner Über-Seite
- Schritt 3: FAQ mit echten Fragen
- Schritt 4: llms.txt erstellen
- Schritt 5: Sichtbarkeit prüfen und nachjustieren

Das dauert insgesamt 2-4 Stunden. Danach bist du besser aufgestellt als 90% aller Websites.

## Bevor du anfängst

### Brauchst du das überhaupt?

Ja, wenn:
- Du Kunden/Klienten über deine Website gewinnen willst
- Deine Zielgruppe KI-Assistenten nutzt (immer mehr Menschen tun das)
- Du in 2-3 Jahren nicht unsichtbar sein willst

Nein, wenn:
- Deine Website nur eine Visitenkarte ist
- Du keine neuen Kunden brauchst
- Du nur lokal arbeitest und Empfehlungen reichen

### Was du brauchst

- Zugang zu deiner Website (zum Bearbeiten)
- 2-4 Stunden Zeit (nicht am Stück nötig)
- Keine technischen Vorkenntnisse

---

## Schritt 1: robots.txt prüfen (15 Minuten)

### Warum zuerst?

Wenn KI-Crawler blockiert sind, nützt alles andere nichts. Das ist die Grundvoraussetzung.

### So geht's

1. Öffne: `https://deine-domain.de/robots.txt`
2. Suche nach `Disallow: /`
3. Wenn da steht `User-agent: *` gefolgt von `Disallow: /` → Problem!

### Schnellfix

Wenn blockiert, ändere zu:

```
User-agent: *
Allow: /

Sitemap: https://deine-domain.de/sitemap.xml
```

📖 [Ausführliche Anleitung: robots.txt für KI](/anleitungen/robots-txt-fuer-ki/)

---

## Schritt 2: Über-Seite überarbeiten (30-60 Minuten)

### Warum?

Die Über-Seite ist oft das erste was KI zitiert. "Wer ist Maria Müller?" → Deine Über-Seite sollte antworten.

### Checkliste für deine Über-Seite

- [ ] Vollständiger Name (nicht nur Vorname)
- [ ] Was du machst (konkret, nicht Marketing-Sprache)
- [ ] Für wen du es machst
- [ ] Qualifikationen/Erfahrung
- [ ] Ort (wenn relevant)

### Vorher/Nachher

**Vorher:**
> "Herzlich willkommen! Schön dass du hier bist. Ich begleite Menschen auf ihrem Weg zu mehr Erfolg und Erfüllung..."

**Nachher:**
> "Maria Müller ist Business Coach für Führungskräfte im Mittelstand. Seit 2010 hat sie über 200 Führungskräfte in München und online begleitet. Schwerpunkte: Neue Führungsrolle, Teamkonflikte, Mitarbeitergespräche. ICF-zertifiziert (PCC)."

Die zweite Version enthält: Name, Beruf, Zielgruppe, Erfahrung, Ort, Spezialisierung, Qualifikation.

---

## Schritt 3: FAQ erstellen (45-60 Minuten)

### Warum?

FAQ-Fragen matchen direkt auf Suchanfragen. Wenn jemand fragt "Was kostet Business Coaching?", kann Perplexity deine FAQ zitieren.

### Die 5 wichtigsten Fragen

1. **Was kostet [dein Angebot]?**
2. **Für wen ist [dein Angebot] geeignet?**
3. **Wie läuft [dein Angebot] ab?**
4. **Wie lange dauert [dein Angebot]?**
5. **Was unterscheidet dich von anderen?**

### Beispiel

```markdown
## Häufige Fragen

### Was kostet ein Business Coaching bei dir?
Ein Coaching kostet 180€ pro Stunde (90 Minuten). 
Die meisten Kunden buchen ein Paket mit 6 Sitzungen 
über 3 Monate für 950€.

### Arbeitest du auch online?
Ja. Etwa 70% meiner Coachings finden online via Zoom statt.
Die Qualität ist gleichwertig zum Präsenz-Coaching.
```

---

## Schritt 4: llms.txt erstellen (30 Minuten)

### Warum?

Eine llms.txt sagt KI-Systemen direkt: Das bin ich, das mache ich, das sind meine wichtigsten Inhalte.

### Minimale Version

Erstelle eine Datei `llms.txt` im Hauptverzeichnis:

```
# [Dein Name] - [Was du machst]

> [Ein Satz der alles zusammenfasst]

## Über mich
[2-3 Sätze zu dir]

## Angebote
- [Angebot 1]: [Kurzbeschreibung]
- [Angebot 2]: [Kurzbeschreibung]

## Kontakt
[Wie man dich erreicht]
```

📖 [Ausführliche Anleitung: llms.txt erstellen](/anleitungen/llms-txt-erstellen/)

---

## Schritt 5: Prüfen und nachjustieren (30 Minuten)

### Sofort prüfen

1. **robots.txt:** Rufe `deine-domain.de/robots.txt` auf - ist alles erlaubt?
2. **llms.txt:** Rufe `deine-domain.de/llms.txt` auf - wird sie angezeigt?
3. **Über-Seite:** Lies sie wie ein Fremder - verstehst du in 10 Sekunden wer das ist und was er/sie macht?

### Nach 2 Wochen prüfen

- [LLM Readability Checker](/tools/llm-readability-checker/) - Technischer Score
- [AI Radar](/tools/ai-radar-einfuehrung/) - Wirst du zitiert?

### Nachjustieren

Basierend auf den Ergebnissen:
- Score unter 50? → [Website optimieren](/anleitungen/website-optimieren/)
- Nicht zitiert? → Content-Lücken füllen
- Falsch zitiert? → Klarheit verbessern

---

## Zeitplan auf einen Blick

| Tag | Aufgabe | Dauer |
|-----|---------|-------|
| 1 | robots.txt prüfen/fixen | 15 Min |
| 1 | Über-Seite überarbeiten | 45 Min |
| 2 | FAQ erstellen | 45 Min |
| 2 | llms.txt erstellen | 30 Min |
| 3 | Alles prüfen | 30 Min |
| +14 | Sichtbarkeit checken | 15 Min |

**Gesamtzeit:** ~3 Stunden

---

## Was dann?

Nach diesen 5 Schritten hast du die Basics. Für weitere Optimierung:

### Level 2: Fortgeschritten
- [Schema.org einbauen](/grundlagen/schema-org-fuer-ki/)
- Blog-Artikel mit Substanz schreiben
- Regelmäßig Content aktualisieren

### Level 3: Profi
- [Perplexity Ranking Faktoren](/grundlagen/perplexity-ranking-faktoren/) verstehen
- Konkurrenz analysieren
- Content-Strategie basierend auf Daten

---

## Häufige Fragen

### Muss ich alles selbst machen?

Nein. Die ersten Schritte sind machbar. Für Schema.org oder tiefere Optimierung kannst du Hilfe holen.

### Was wenn ich WordPress nutze?

Die Schritte sind gleich. Bei WordPress gibt es Plugins die helfen (Yoast, Rank Math). Aber die Grundlagen musst du trotzdem selbst machen.

### Wie lange bis ich Ergebnisse sehe?

Nach 2-4 Wochen solltest du erste Veränderungen messen können. Echte Sichtbarkeit baut sich über Monate auf.

### Was kostet das?

Diese ersten Schritte: nur deine Zeit. Für mehr Optimierung oder professionelle Hilfe gibt es verschiedene Optionen bei [CodeBack.de](https://codeback.de).

## Nächste Schritte

1. **Jetzt:** [robots.txt prüfen](/anleitungen/robots-txt-fuer-ki/)
2. **Diese Woche:** Über-Seite und FAQ
3. **Nächste Woche:** [llms.txt erstellen](/anleitungen/llms-txt-erstellen/)
