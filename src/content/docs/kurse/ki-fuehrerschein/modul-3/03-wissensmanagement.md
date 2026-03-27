---
title: "Vorstands-Wissensmanagement"
description: "Modul 3: Verwaltung — Vorstands-Wissensmanagement"
sidebar:
  order: 3
---

Der Kassenwart tritt zurück. Er war 12 Jahre im Amt. Sein Nachfolger fragt am ersten Tag: „Wo ist das Passwort für das Online-Banking?" Niemand weiß es. Es stand auf einem Post-it am Monitor des Kassenwarts. Der hat seinen Rechner schon mitgenommen. Dieses Szenario passiert in deutschen Vereinen regelmäßig. Es ist der Moment, in dem Vereine wochenlang handlungsunfähig werden. Die Lösung ist ein Vereins-Wiki: ein zentraler Ort, an dem das gesamte Wissen des Vereins dokumentiert ist. Diese Lektion zeigt dir, wie du es einrichtest — und wie KI dir hilft, das Wissen aus den Köpfen in das Wiki zu bekommen.

### Der „Bus-Faktor"

In der Software-Entwicklung gibt es den Begriff „Bus-Faktor": Wie viele Leute müssten von einem Bus überfahren werden, damit das Projekt zum Stillstand kommt? Der Begriff klingt makaber, aber die Frage ist berechtigt.

Für deinen Verein: Wie viele Vorstände müssten gleichzeitig aufhören, damit niemand mehr weiß, wie der Beitragslauf funktioniert, wo die Vereinssatzung im Amtsgericht hinterlegt ist und wann der Mietvertrag für die Halle ausläuft?

Wenn die Antwort „einer" ist, hast du ein Problem. Genau dieses Problem löst ein Vereins-Wiki.

### Was ein Vereins-Wiki enthalten muss

Vier Bereiche decken das Wichtigste ab:

**1. Prozesse:** Wie wird der Jahresbeitrag eingezogen? Wie läuft die JHV-Vorbereitung ab? Wie stellen wir den Förderantrag bei der DSEE? Jeder Prozess als Schritt-für-Schritt-Anleitung. So, dass jemand Neues es nachmachen kann, ohne nachfragen zu müssen.

**2. Zugänge:** Alle Passwörter, Logins und Zugangsdaten — aber nicht im Wiki selbst. Nutze einen Passwort-Manager (z.B. Bitwarden oder KeePass — aktuelle Empfehlungen im Tool-Register). Im Wiki steht nur: „Zugang zum Online-Banking liegt im Passwort-Manager unter ‚Vereinskonto Sparkasse'."

**3. Kontakte:** Wer ist zuständig für was? Nicht nur intern (Vorstand, Trainer, Jugendleiter), sondern auch extern: Wer ist die Ansprechperson bei der Stadt? Welchen Steuerberater nutzt der Verein? Wie heißt der Kontakt beim Landessportbund?

**4. Kalender:** Wiederkehrende Aufgaben mit Fristen. Wann muss die Steuererklärung raus? Wann ist die Fördermittel-Deadline? Wann läuft der Hallenvertrag aus?

### Schritt-für-Schritt: Ein Vereins-Wiki einrichten

Wähle ein Wiki-Tool, das zu deinem Verein passt (z.B. Notion, Google Docs oder BookStack — Vergleich im Tool-Register). Die folgenden Schritte funktionieren mit jedem dieser Tools sinngemäß:

**Schritt 1: Konto erstellen**
Öffne dein gewähltes Wiki-Tool im Browser und registriere dich mit der E-Mail-Adresse des Vereins (z.B. vorstand@dein-verein.de). Wähle den kostenlosen Einsteigerplan.

**Schritt 2: Workspace benennen**
Lege einen Workspace oder eine Hauptdatei an und benenne ihn mit dem Vereinsnamen. Zum Beispiel: „TSV Grünbach — Vereins-Wiki".

**Schritt 3: Grundstruktur anlegen**
Erstelle vier Hauptbereiche:

- Prozesse
- Zugänge & Passwörter
- Kontakte
- Kalender & Fristen

**Schritt 4: Unterseiten erstellen**
Öffne den Bereich „Prozesse" und erstelle Unterseiten für jeden dokumentierten Prozess. Beginne mit den drei wichtigsten:

- Beitragslauf (wann, wie, wer)
- JHV-Vorbereitung (Timeline, Einladung, Tagesordnung, Protokoll)
- Vorstandswechsel (Übergabe-Checkliste)

**Schritt 5: Erste Seite befüllen**
Öffne die Unterseite „Beitragslauf". Beschreibe den Prozess in eigenen Worten — oder lass die KI helfen (Prompt folgt unten). Schreibe jeden Schritt auf. Von „Kassenwart exportiert Mitgliederliste" bis „Mahnungen versenden nach 4 Wochen".

**Schritt 6: Vorstand einladen**
Teile den Workspace mit den E-Mail-Adressen der Vorstandsmitglieder und gib ihnen Bearbeitungsrechte. Jetzt können alle Vorstände das Wiki lesen und ergänzen.

**Schritt 7: Passwort-Manager einrichten**
Erstelle parallel ein Konto bei einem Passwort-Manager deiner Wahl (→ Tool-Register). Lege dort alle Vereins-Zugänge an: Online-Banking, E-Mail-Konto, Website-Login, Social-Media-Accounts, Vereinssoftware. Im Wiki unter „Zugänge & Passwörter" notierst du nur, welche Zugänge existieren und wo sie im Passwort-Manager zu finden sind.

> **Praxistipp**
> Beginne klein. Du musst nicht alles auf einmal dokumentieren. Starte mit dem einen Prozess, den nur eine Person kennt. Das ist der Prozess mit dem höchsten Risiko.

### Alternative Tools

Es gibt verschiedene Wiki-Tools, die für Vereine geeignet sind. Eine aktuelle Übersicht mit Vor- und Nachteilen findest du im Tool-Register. Für die meisten Vereine ist ein einfach zu bedienendes Tool wie Notion oder Google Docs der pragmatischste Einstieg. Wenn jemand im Vorstand technisch versiert ist, lohnt sich eine echte Wiki-Software wie BookStack.

### KI als Wissenserfassungs-Assistent

Das größte Problem beim Wiki ist nicht das Tool. Es ist das Befüllen. Niemand hat Lust, stundenlang Prozesse aufzuschreiben. Hier hilft die KI als Gesprächspartner, der dir die richtigen Fragen stellt.

**Der Interview-Prompt (für scheidende Vorstände):**

```
Ich bin Vorstand eines [Vereinstyp] mit [Mitgliederzahl] Mitgliedern und gebe mein Amt ab. Mein Nachfolger soll alles wissen, was er braucht. Stelle mir systematisch alle Fragen, die ein neuer [Vorsitzender/Kassenwart/Schriftführer] haben wird. Frage nach:
- Regelmäßigen Aufgaben und ihren Fristen
- Wichtigen Kontaktpersonen (intern und extern)
- Zugängen und Passwörtern (nur welche existieren, keine Passwörter selbst)
- Stolperfallen und Tipps aus meiner Erfahrung
- Laufenden Projekten und deren Status

Stelle die Fragen einzeln. Warte auf meine Antwort, bevor du die nächste Frage stellst.
```

**Ausgefülltes Beispiel:**

```
Ich bin Kassenwart eines Sportvereins mit 280 Mitgliedern und gebe mein Amt ab. Mein Nachfolger soll alles wissen, was er braucht. Stelle mir systematisch alle Fragen, die ein neuer Kassenwart haben wird. Frage nach:
- Regelmäßigen Aufgaben und ihren Fristen
- Wichtigen Kontaktpersonen (intern und extern)
- Zugängen und Passwörtern (nur welche existieren, keine Passwörter selbst)
- Stolperfallen und Tipps aus meiner Erfahrung
- Laufenden Projekten und deren Status

Stelle die Fragen einzeln. Warte auf meine Antwort, bevor du die nächste Frage stellst.
```

Die KI führt dich durch ein strukturiertes Übergabegespräch. Jede Antwort, die du gibst, wird zur Grundlage einer Wiki-Seite.

**Der Prozess-Dokumentations-Prompt:**

```
Ich beschreibe dir jetzt, wie in unserem Verein [Prozessname] abläuft. Ich erzähle frei, du machst daraus eine strukturierte Schritt-für-Schritt-Anleitung. Nummeriere die Schritte. Ergänze bei jedem Schritt, welche Tools oder Dokumente benötigt werden. Frage nach, wenn dir Informationen fehlen.

Prozess: [z.B. "So ziehen wir den Jahresbeitrag ein"]
```

Du erzählst der KI einfach, wie du es machst. Sie macht eine saubere Anleitung daraus. Das ist wesentlich schneller als selbst zu schreiben — und du vergisst weniger, weil die KI nachfragt.

**Der FAQ-Generator:**

```
Erstelle aus den folgenden Informationen eine FAQ-Seite für neue Vorstandsmitglieder unseres Vereins. Maximal 15 Fragen. Sortiere nach Relevanz: Die wichtigsten Fragen zuerst. Schreibe verständlich und knapp.

Informationen:
[Hier den Inhalt mehrerer Wiki-Seiten oder Notizen einfügen]
```

### Übergabe-Checkliste

Jeder scheidende Vorstand muss folgende Punkte dokumentiert übergeben. Nutze diese Liste als Vorlage und passe sie an dein Amt an:

**Das Wiki am Leben halten**

Ein Wiki, das niemand pflegt, ist in sechs Monaten veraltet. Drei einfache Regeln verhindern das:

**Regel 1: Jede Änderung sofort eintragen.** Wenn sich der Beitragslauf ändert, aktualisierst du die Wiki-Seite am selben Tag. Nicht nächste Woche, nicht beim nächsten Vorstandstreffen. Sofort.

**Regel 2: Einmal pro Quartal Review.** Setzt euch als Vorstand 30 Minuten zusammen und geht die Wiki-Seiten eures Bereichs durch. Stimmt noch alles? Fehlt etwas? Tragt den Termin fest im Kalender ein.

**Regel 3: Neue Vorstände ergänzen.** Wenn ein neues Vorstandsmitglied anfängt, ist das die beste Gelegenheit. Der neue Mensch stellt Fragen, die Alteingesessene nicht mehr stellen. Jede Frage, die er stellt, gehört als Antwort ins Wiki.

**Allgemein (jedes Amt):**
- [ ] Alle Zugänge im Passwort-Manager aktualisiert
- [ ] Laufende Projekte mit Status dokumentiert
- [ ] Offene Fristen und Deadlines übergeben
- [ ] Wichtige Kontakte mit Kontext notiert
- [ ] Persönliches Übergabegespräch geführt

**Vorsitzender:**
- [ ] Vertretungsberechtigung beim Amtsgericht aktualisiert
- [ ] Bankunterschrift geändert
- [ ] Laufende Verträge (Halle, Versicherung) übergeben
- [ ] Kontakte zu Stadtverwaltung und Dachverband übergeben

**Kassenwart:**
- [ ] Buchführung übergeben (Software-Zugang, Belege, Kontoauszüge)
- [ ] Bankzugang umgestellt
- [ ] Steuererklärungsstatus dokumentiert
- [ ] Gemeinnützigkeitsbescheid Ablageort dokumentiert
- [ ] Laufende Lastschriften und Daueraufträge dokumentiert

**Schriftführer:**
- [ ] Protokolle der letzten 3 Jahre übergeben
- [ ] Satzung, Geschäftsordnung und letzte Änderungen übergeben
- [ ] Vereinsregister-Zugangsdaten dokumentiert
- [ ] Mitgliederverzeichnis übergeben

### Praxisübung Lektion 3.3

1. Wähle den einen Prozess in deinem Verein, den nur du (oder eine einzige Person) kennst.
2. Öffne einen KI-Textgenerator deiner Wahl und nutze den Prozess-Dokumentations-Prompt. Erzähle der KI, wie der Prozess abläuft.
3. Kopiere die fertige Anleitung in das Wiki-Tool deiner Wahl (z.B. Notion, Google Docs oder ein Word-Dokument).
4. Passe die Übergabe-Checkliste an dein Amt an. Fülle sie mit den konkreten Angaben deines Vereins aus.

Wenn du fertig bist, hast du: Einen dokumentierten Kernprozess und eine persönliche Übergabe-Checkliste für dein Amt.

---
