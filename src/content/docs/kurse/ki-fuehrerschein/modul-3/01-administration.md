---
title: "Intelligente Administration"
description: "Modul 3: Verwaltung — Intelligente Administration"
sidebar:
  order: 1
---

> **Hinweis:** Alle in diesem Kurs erwähnten Tools, aktuelle Preise und Alternativen findest du im Tool-Register am Ende des Kurses. Die Kursinhalte sind so geschrieben, dass sie mit jedem gängigen KI-Tool funktionieren.

Du kennst das: Montag, 19 Uhr. Eigentlich wolltest du nur kurz die E-Mails checken. Zwei Stunden später sitzt du immer noch am Rechner. Ein Mitglied fragt nach der Beitragsquittung, ein anderes will die Bankverbindung ändern, der Vermieter der Halle will die Versicherungsbestätigung, und die Einladung zur nächsten Vorstandssitzung ist auch noch nicht raus. Die DSEE-Studie bringt es auf den Punkt: 42 Tage pro Jahr verbringt ein Verein mit Papierkram. Diese Lektion zeigt dir, wie KI dir bei den zehn größten Zeitfressern hilft.

### Die 10 zeitfressendsten Verwaltungsaufgaben — und wie KI sie löst

Die folgende Liste basiert auf den DSEE-Erhebungen zur ehrenamtlichen Belastung. Für jede Aufgabe bekommst du einen konkreten KI-Workflow: Was du brauchst, wie du es machst, was am Ende rauskommt.

---

#### 1. Standard-E-Mails beantworten

**Das Problem:** Immer dieselben Fragen. Wie hoch ist der Beitrag? Wann ist das nächste Training? Wie kündige ich? Du tippst die Antworten zum hundertsten Mal.

**Der KI-Workflow:**

1. Sammle die 10 häufigsten Fragen, die dein Verein per E-Mail bekommt.
2. Öffne ChatGPT oder Claude.
3. Öffne einen KI-Textgenerator deiner Wahl und gib folgenden Prompt ein:

```
Du bist die Geschäftsstelle des [Vereinsname]. Erstelle für jede der folgenden Fragen eine freundliche, sachliche Antwort-Vorlage. Jede Antwort maximal 5 Sätze. Verwende die Du-Anrede.

Fragen:
1. [Wie hoch ist der Mitgliedsbeitrag?]
2. [Wann sind die Trainingszeiten?]
3. [Wie kann ich meine Mitgliedschaft kündigen?]
4. [Kann ich eine Beitragsquittung bekommen?]
5. [...]
```

**Ausgefülltes Beispiel für einen Sportverein:**

```
Du bist die Geschäftsstelle des TSV Grünbach 1920 e.V. Erstelle für jede der folgenden Fragen eine freundliche, sachliche Antwort-Vorlage. Jede Antwort maximal 5 Sätze. Verwende die Du-Anrede.

Fragen:
1. Wie hoch ist der Mitgliedsbeitrag?
2. Wann ist das Fußballtraining der Herren?
3. Wie kann ich meine Mitgliedschaft kündigen?
4. Kann ich eine Spendenquittung bekommen?
5. Wie melde ich mein Kind für die Jugendabteilung an?
```

4. Kopiere die Antworten in ein Dokument.
5. Prüfe jede Antwort auf Richtigkeit. Passe Beiträge, Zeiten und Kontaktdaten an.
6. Speichere die Vorlagen dort, wo du deine E-Mails bearbeitest. In Gmail oder Outlook kannst du sie als Textbausteine hinterlegen.

**Zeitersparnis:** Statt 10 Minuten pro E-Mail brauchst du 2 Minuten zum Anpassen und Absenden.

---

#### 2. Sitzungsprotokolle erstellen

**Das Problem:** Während der Vorstandssitzung mitschreiben, danach alles ins Reine tippen, an alle verschicken. Das dauert oft länger als die Sitzung selbst.

**Der KI-Workflow:**

1. Nimm die Sitzung mit dem Smartphone auf. Eine einfache Sprachaufnahme reicht. Frage vorher die Anwesenden, ob sie mit der Aufnahme einverstanden sind.
2. Lade die Audiodatei bei einem Transkriptionsdienst hoch. Kostenlose Optionen sind z.B. in manche KI-Textgeneratoren integrierte Transkriptionsfunktionen oder die Spracheingabe in Google Docs (unter „Tools" → „Spracheingabe"). Aktuelle Optionen im Tool-Register.
3. Du bekommst einen Rohtext. Der ist lang und unstrukturiert. Gib ihn an deinen KI-Textgenerator mit folgendem Prompt:

```
Erstelle aus dem folgenden Transkript einer Vorstandssitzung ein formelles Protokoll. Verwende diese Struktur:

- Datum, Ort, Anwesende, Beginn/Ende
- Tagesordnungspunkte mit Ergebnissen
- Beschlüsse mit Wortlaut und Abstimmungsergebnis
- Aufgaben mit Verantwortlichen und Fristen

Formuliere sachlich und knapp. Lasse Smalltalk und Wiederholungen weg.

Transkript:
[Hier den transkribierten Text einfügen]
```

4. Prüfe das Protokoll. Stimmen die Beschlüsse? Sind alle Aufgaben korrekt zugeordnet? Ergänze fehlende Details.
5. Verschicke das Protokoll an die Teilnehmer.

**Zeitersparnis:** Von 90 Minuten Nachbereitung auf 20 Minuten.

> **Praxistipp**
> Lösche die Audioaufnahme nach der Protokollerstellung. Du brauchst sie nicht mehr, und die DSGVO dankt es dir. Speichere das fertige Protokoll in eurem gemeinsamen Ablagesystem.

---

#### 3. Mitgliederdaten aktualisieren

**Das Problem:** Drei Excel-Listen, zwei davon veraltet. Familie Müller steht zweimal drin, einmal als „Mueller". Die Adresse vom Kassenwart ist noch die von 2019.

**Der KI-Workflow:**

1. Exportiere deine Mitgliederliste als CSV- oder Excel-Datei.
2. Entferne vorher personenbezogene Daten, die nicht nötig sind. Für einen Duplikat-Check brauchst du nur Name, Vorname und Geburtsdatum.
3. Gib die anonymisierte Liste an deinen KI-Textgenerator mit folgendem Prompt:

```
Prüfe diese Mitgliederliste auf Duplikate und Inkonsistenzen. Achte auf:
- Ähnliche Namen (Müller/Mueller, Schmidt/Schmitt)
- Doppelte Einträge mit leicht abweichender Schreibweise
- Fehlende Pflichtfelder

Gib mir eine Liste aller vermuteten Duplikate mit Zeilennummer und Begründung.

Daten:
[Hier die anonymisierten Daten einfügen]
```

4. Gehe die Liste der vermuteten Duplikate durch. Prüfe jeden Fall manuell.
5. Bereinige deine Original-Datei.

**Wichtig:** Gib niemals vollständige Mitgliederdaten (mit Adresse, Bankverbindung, E-Mail) in ein KI-Tool ein. Die KI-Richtlinie aus Modul 1 ist hier dein Leitfaden. Arbeite mit reduzierten Datensätzen.

---

#### 4. Finanzberichte formulieren

**Das Problem:** Die Zahlen stehen in der Buchhaltung. Der Kassenwart muss daraus einen Bericht für die Mitgliederversammlung machen. Zahlen hat er. Worte findet er schwer.

**Der KI-Workflow:**

1. Trage die Eckdaten zusammen: Einnahmen, Ausgaben, größte Posten, Veränderungen zum Vorjahr.
2. Gib die Zahlen an deinen KI-Textgenerator:

```
Schreibe einen Finanzbericht für die Mitgliederversammlung unseres Vereins. Sachlich, verständlich, maximal eine DIN-A4-Seite.

Eckdaten:
- Einnahmen gesamt: [Betrag] EUR (Vorjahr: [Betrag] EUR)
- Ausgaben gesamt: [Betrag] EUR (Vorjahr: [Betrag] EUR)
- Größte Einnahmeposten: [Mitgliedsbeiträge: X EUR, Spenden: X EUR, Förderung: X EUR]
- Größte Ausgabeposten: [Hallenmiete: X EUR, Trainerhonorare: X EUR, Material: X EUR]
- Rücklagen: [Betrag] EUR
- Besonderheiten: [z.B. Neuanschaffung, Sonderausgabe, unerwartete Einnahme]
```

3. Prüfe jede Zahl im generierten Text gegen deine Buchhaltung. KI rechnet gelegentlich falsch. Die Zahlen müssen von dir kommen, der Text drum herum von der KI.

---

#### 5. Satzungsänderungen formulieren

**Das Problem:** Die Satzung muss angepasst werden. Die letzte Änderung war 2012. Niemand im Vorstand hat Jura studiert.

**Der KI-Workflow:**

1. Kopiere den betroffenen Paragraphen der aktuellen Satzung.
2. Beschreibe in eigenen Worten, was sich ändern soll.
3. Nutze folgenden Prompt:

```
Hier ist § [X] unserer Vereinssatzung:
[Aktueller Wortlaut]

Wir möchten folgende Änderung: [Beschreibung in eigenen Worten]

Formuliere einen neuen Wortlaut für diesen Paragraphen. Orientiere dich an üblichen Vereinssatzungen nach deutschem Recht (§ 21 ff. BGB). Markiere die geänderten Stellen.
```

4. **Pflicht:** Lass den Entwurf von einem Anwalt oder dem Registergericht prüfen, bevor er zur Abstimmung kommt. KI ist hier ein Formulierungshelfer, kein Rechtsberater. Fehler in der Satzung können zur Ablehnung beim Registergericht führen.

> **Praxistipp**
> Viele Landesverbände bieten kostenlose Satzungsberatung an. Nutze die KI für den ersten Entwurf und den Verband für die juristische Prüfung.

---

#### 6. Fördermittel-Sachberichte

**Das Problem:** Die Förderung ist bewilligt, das Projekt durchgeführt. Jetzt will der Fördergeber wissen, was passiert ist. Der Sachbericht muss in Förder-Sprache geschrieben sein.

**Der KI-Workflow:**

1. Sammle die Fakten: Was wurde gemacht? Wie viele Teilnehmer? Welche Ergebnisse? Fotos, Belege, Teilnehmerlisten.
2. Nutze diesen Prompt:

```
Schreibe einen Sachbericht für den Fördergeber [Name des Programms]. Das Projekt lief von [Datum] bis [Datum].

Fakten:
- Projektziel: [Was war geplant?]
- Durchgeführte Maßnahmen: [Was wurde konkret gemacht?]
- Teilnehmer: [Anzahl, Zielgruppe]
- Ergebnisse: [Was wurde erreicht?]
- Abweichungen vom Plan: [Was lief anders?]
- Verwendete Mittel: [Gesamtsumme, aufgeteilt nach Kategorien]

Schreibe wirkungsorientiert. Verwende Formulierungen wie "Es wurden X Personen erreicht" und "Die Maßnahme trug dazu bei, dass...". Sachlich, keine Werbesprache.
```

3. Prüfe den Bericht gegen die Förderbedingungen. Jeder Fördergeber hat eigene Anforderungen an den Sachbericht. Dieses Wissen brauchst du in Modul 4 noch im Detail.

---

#### 7. Einladungen und Tagesordnungen

**Das Problem:** Die Einladung zur Mitgliederversammlung muss fristgerecht raus. Die Tagesordnung muss satzungsgemäß sein. Du hast 30 Minuten.

**Der KI-Workflow:**

1. Gib den Prompt aus der Prompt-Bibliothek ein, die du in Modul 2 angelegt hast. Falls du den System-Prompt aus Lektion 2.3 nutzt, hat die KI den Vereinskontext schon.
2. Ergänze: Datum, Ort, Beginn, Tagesordnungspunkte.
3. Die KI erstellt die Einladung mit allen Pflichtangaben (Ort, Zeit, Tagesordnung, Hinweis auf satzungsgemäße Einberufung).
4. Prüfe die Ladungsfrist. Steht in eurer Satzung, oft 2-4 Wochen. Das kann die KI nicht für dich prüfen.

**Zeitersparnis:** Von 45 Minuten Formulieren auf 10 Minuten Anpassen.

---

#### 8. Beitragsrechnungen mit personalisierten Texten

**Das Problem:** 200 Mitglieder, 200 Rechnungen. Alle gleich, aber jede mit Name, Betrag und Mitgliedsnummer.

**Der KI-Workflow:**

1. Erstelle in deiner Tabellenkalkulation eine Liste: Name, Anrede, Betrag, Mitgliedsnummer, E-Mail.
2. Lass dir von der KI einen Vorlagentext erstellen:

```
Schreibe eine freundliche Beitragsrechnung für unseren Verein [Vereinsname]. Der Text soll Platzhalter enthalten für: [Anrede], [Name], [Mitgliedsnummer], [Betrag], [Fälligkeitsdatum]. Maximal 8 Sätze. Freundlich, aber klar. Bankverbindung: [IBAN].
```

3. Den generierten Text nutzt du als Serienbrief-Vorlage in Word oder LibreOffice. Die Platzhalter verknüpfst du mit deiner Tabelle.
4. Versand per E-Mail über die Serienbrief-Funktion oder deine Vereinssoftware.

---

#### 9. Versicherungsfragen klären

**Das Problem:** Das Sommerfest steht an. Braucht der Verein eine Veranstaltungshaftpflicht? Sind die Helfer unfallversichert? Was ist mit dem Hüpfburg-Verleih?

**Der KI-Workflow:**

1. Beschreibe die Situation in eigenen Worten.
2. Nutze diesen Prompt:

```
Ich bin Vorstand eines [Vereinstyp] in [Bundesland]. Wir planen [Veranstaltung/Situation]. Welche Versicherungsfragen sollte ich klären? Erstelle eine Checkliste mit den relevanten Versicherungsarten, und woran ich bei jeder denken muss. Ich bin kein Versicherungsexperte. Erkläre einfach.
```

3. **Wichtig:** Die KI gibt dir eine Orientierung und eine Checkliste. Sie ersetzt keine Beratung. Ruf mit der Checkliste bei eurem Versicherer an. Du weißt dann, welche Fragen du stellen musst.

---

#### 10. Veranstaltungsplanung

**Das Problem:** Das Vereinsjubiläum ist in drei Monaten. Du brauchst einen Zeitplan, eine Aufgabenliste und hast keinen Anfang.

**Der KI-Workflow:**

1. Beschreibe die Veranstaltung: Art, Größe, Budget, Termin.
2. Nutze diesen Prompt:

```
Erstelle eine vollständige Planungs-Checkliste für folgende Vereinsveranstaltung:

- Art: [z.B. 100-jähriges Vereinsjubiläum]
- Datum: [Termin]
- Erwartete Teilnehmer: [Anzahl]
- Budget: [ca. X EUR]
- Location: [z.B. Vereinsheim, Festzelt]

Gliedere die Checkliste nach Zeitphasen: 3 Monate vorher, 1 Monat vorher, 1 Woche vorher, am Tag selbst, nach der Veranstaltung. Jede Aufgabe mit Verantwortlichkeit (Platzhalter) und Deadline.
```

3. Gehe die Liste durch. Streiche, was nicht passt. Ergänze, was fehlt. Weise die Aufgaben konkreten Personen zu.

> **Praxistipp**
> Kopiere die Checkliste in ein geteiltes Dokument (z.B. Google Docs oder ein Wiki-Tool deiner Wahl). So sehen alle Beteiligten den aktuellen Stand, und du musst nicht einzeln nachfragen.

---

### Automatisierung mit No-Code-Tools

Für wiederkehrende Abläufe kannst du die einzelnen Schritte verbinden. Automatisierungstools (z.B. Zapier, Make oder n8n — Vergleich und aktuelle Preise im Tool-Register) helfen dabei, ohne dass du programmieren musst. Ein Beispiel:

| Schritt | Was passiert | Beispiel-Tool |
|---|---|---|
| 1 | E-Mail kommt rein | Gmail / Outlook |
| 2 | Automatisierungstool erkennt: Betreff enthält „Kündigung" | Automatisierungstool |
| 3 | KI erstellt einen Antwort-Entwurf | KI-Textgenerator (via Integration) |
| 4 | Entwurf landet in deinem Postfach zur Prüfung | Gmail / Outlook |
| 5 | Du prüfst, passt an, schickst ab | Du |

Der Mensch bleibt in der Schleife. Die KI formuliert vor, du entscheidest.

**So richtest du deinen ersten Automatisierungs-Workflow ein:**

1. Erstelle ein kostenloses Konto bei einem Automatisierungstool deiner Wahl (→ Tool-Register für aktuelle Empfehlungen).
2. Erstelle einen neuen Workflow / eine neue Automatisierung.
3. Wähle als Trigger (Auslöser) dein E-Mail-Programm. Die Bedingung: „Neue E-Mail im Posteingang".
4. Füge einen Filter hinzu: Betreff enthält „Kündigung" oder „Austritt".
5. Wähle als Aktion die KI-Integration und gib als Prompt ein: „Schreibe eine freundliche Bestätigung für eine Vereinskündigung. Bedauere den Austritt, weise auf die satzungsgemäße Kündigungsfrist hin und biete ein Gespräch an."
6. Wähle als letzte Aktion „Entwurf erstellen" in deinem E-Mail-Programm. Der KI-Text landet als Entwurf in deinem Postfach.
7. Du prüfst den Entwurf und schickst ihn ab — oder änderst ihn.

Die Einrichtung dauert etwa 20 Minuten. Ab dann sparst du bei jeder Kündigungs-E-Mail 10 Minuten.

### Zeitersparnis berechnen

Nimm dir fünf Minuten und rechne für deinen Verein:

| Aufgabe | Minuten pro Woche (bisher) | Minuten pro Woche (mit KI) | Ersparnis |
|---|---|---|---|
| Standard-E-Mails | __ | __ | __ |
| Protokolle | __ | __ | __ |
| Einladungen | __ | __ | __ |
| ... | __ | __ | __ |
| **Gesamt** | **__** | **__** | **__** |

6,5 Stunden pro Woche verbringt ein durchschnittlicher Vorstand mit Verwaltung. Wenn du davon 40 Prozent sparst, sind das 2,5 Stunden. Pro Monat über 10 Stunden. Pro Jahr über 130 Stunden. Das ist Zeit, die du in deinen Verein stecken kannst — oder in deinen Feierabend.

### Praxisübung Lektion 3.1

1. Schreibe die drei Verwaltungsaufgaben auf, die dich am meisten Zeit kosten.
2. Wähle für jede Aufgabe den passenden KI-Workflow aus dieser Lektion.
3. Führe den Workflow für mindestens eine Aufgabe komplett durch: Prompt eingeben, Ergebnis prüfen, anpassen.
4. Fülle die Zeitersparnis-Tabelle für deinen Verein aus.

Wenn du fertig bist, hast du: Einen konkreten KI-Workflow für deine größten Zeitfresser und eine realistische Einschätzung, wie viel Zeit du sparst.

---
