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

### Was du brauchst

- Zugang zu deiner Website (zum Bearbeiten)
- 2-4 Stunden Zeit (nicht am Stück nötig)
- Keine technischen Vorkenntnisse

---

## Die 5 Schritte

1. **robots.txt prüfen** (15 Minuten)

   **Warum zuerst?** Wenn KI-Crawler blockiert sind, nützt alles andere nichts.

   > **So geht's:** 1. Öffne: `https://deine-domain.de/robots.txt`
>    2. Suche nach `Disallow: /`
>    3. Wenn da steht `User-agent: *` gefolgt von `Disallow: /` → Problem!

   **Schnellfix:** Ändere zu:
   ```
   User-agent: *
   Allow: /

   Sitemap: https://deine-domain.de/sitemap.xml
   ```

   [Ausführliche Anleitung →](/anleitungen/robots-txt-fuer-ki/)

2. **Über-Seite überarbeiten** (30-60 Minuten)

   **Warum?** Die Über-Seite ist oft das erste was KI zitiert.

   **Checkliste:**
   - [ ] Vollständiger Name (nicht nur Vorname)
   - [ ] Was du machst (konkret, nicht Marketing-Sprache)
   - [ ] Für wen du es machst
   - [ ] Qualifikationen/Erfahrung
   - [ ] Ort (wenn relevant)



3. **FAQ erstellen** (45-60 Minuten)

   **Warum?** FAQ-Fragen matchen direkt auf Suchanfragen.

   > **Die 5 wichtigsten Fragen:** 1. Was kostet dein Angebot?
>    2. Für wen ist es geeignet?
>    3. Wie läuft es ab?
>    4. Wie lange dauert es?
>    5. Was unterscheidet dich von anderen?

   **Beispiel:**
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

4. **llms.txt erstellen** (30 Minuten)

   **Warum?** Eine llms.txt sagt KI-Systemen direkt wer du bist.

   **Minimale Version:**
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

   [Ausführliche Anleitung →](/anleitungen/llms-txt-erstellen/)

5. **Prüfen und nachjustieren** (30 Minuten)

   **Sofort prüfen:**
   - robots.txt: Rufe `deine-domain.de/robots.txt` auf - ist alles erlaubt?
   - llms.txt: Rufe `deine-domain.de/llms.txt` auf - wird sie angezeigt?
   - Über-Seite: Lies sie wie ein Fremder - verstehst du in 10 Sekunden wer das ist?

   **Nach 2 Wochen prüfen:**
   - [LLM Readability Checker](/tools/llm-readability-checker/) - Technischer Score
   - [AI Radar](/tools/ai-radar-einfuehrung/) - Wirst du zitiert?

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

Nach diesen 5 Schritten hast du die Basics.

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

<CardGrid>
  <Card title="Jetzt: robots.txt" icon="setting">
    Der erste und wichtigste Schritt.

    [Zur Anleitung →](/anleitungen/robots-txt-fuer-ki/)
  </Card>
  <Card title="Diese Woche: llms.txt" icon="document">
    Deine Visitenkarte für KI.

    [Zur Anleitung →](/anleitungen/llms-txt-erstellen/)
  </Card>
</CardGrid>
