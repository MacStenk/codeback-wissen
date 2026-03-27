---
title: "Mitgliederbindung & Churn Prediction"
description: "Modul 3: Verwaltung — Mitgliederbindung & Churn Prediction"
sidebar:
  order: 2
---

Jedes Jahr verlieren deutsche Vereine Mitglieder. Oft merkt es niemand, bis der Beitrag nicht mehr kommt. Dann ist es zu spät — das Mitglied hat bereits innerlich gekündigt, Wochen oder Monate vorher. Die gute Nachricht: Die Warnsignale stehen meistens schon in euren Daten. Du musst sie nur lesen können. Diese Lektion zeigt dir, wie du mit einfachen Mitteln erkennst, wer gerade auf dem Absprung ist — und was du tun kannst, bevor die Kündigung kommt.

### Was „Churn" bedeutet

„Churn" (sprich: Tschörn) ist ein englischer Begriff aus der Wirtschaft. Er bedeutet: Kundenverlust. Im Vereinskontext meint er den Anteil der Mitglieder, die den Verein innerhalb eines Zeitraums verlassen. Wenn dein Verein 200 Mitglieder hat und pro Jahr 20 austreten, liegt dein Churn bei 10 Prozent.

Das klingt nach wenig. Aber 10 Prozent bedeuten: In zehn Jahren hast du deinen gesamten Verein einmal komplett ausgetauscht. Und neue Mitglieder zu gewinnen kostet erheblich mehr Aufwand als bestehende zu halten.

### Warnsignale in deinen Daten

Die meisten Vereine sammeln Daten, ohne es zu merken. In deiner Mitgliederliste, in den Anmeldelisten für Veranstaltungen, in den E-Mail-Statistiken deines Newsletters. Diese Daten verraten dir, wer sich zurückzieht.

**Vier Warnsignale, die du aus vorhandenen Daten ablesen kannst:**

**Sinkende Teilnahme.** Ein Mitglied, das früher jede Woche zum Training kam, taucht seit zwei Monaten nicht mehr auf. Bei Kulturvereinen: Jemand, der jede Lesung besucht hat, fehlt dreimal hintereinander.

**Keine Reaktion auf Kommunikation.** Dein Newsletter-Tool zeigt dir die Öffnungsraten. Mitglieder, die seit drei Monaten keine E-Mail mehr öffnen, haben den Verein mental schon verlassen.

**Unbezahlte Beiträge.** Wer den Beitrag nicht zahlt, hat oft nicht vergessen — sondern überlegt, ob es sich noch lohnt.

**Kein Engagement mehr.** Das Mitglied, das früher beim Sommerfest den Grill bedient hat, meldet sich nicht mehr freiwillig. Keine Reaktion auf Aufrufe in der WhatsApp-Gruppe.

### Analyse mit Excel und KI

Du brauchst für eine einfache Churn-Analyse keine teure Software. Excel oder Google Sheets reichen für den Anfang. Der KI-Prompt hilft dir beim Auswerten.

**Schritt 1:** Erstelle eine Tabelle mit diesen Spalten:

| Mitglied (anonymisiert) | Eintrittsjahr | Veranstaltungen letzte 12 Monate | Newsletter geöffnet (ja/nein) | Beitrag bezahlt | Ehrenamt aktiv |
|---|---|---|---|---|---|
| M-001 | 2019 | 2 | nein | ja | nein |
| M-002 | 2021 | 11 | ja | ja | ja |
| M-003 | 2015 | 0 | nein | nein | nein |

**Schritt 2:** Anonymisiere die Daten. Ersetze Namen durch Kürzel (M-001, M-002, ...). Entferne Adressen, Geburtsdaten und Kontaktdaten. Du gibst der KI nur die Verhaltensdaten.

**Schritt 3:** Nutze diesen Prompt:

```
Ich gebe dir eine anonymisierte Mitgliederliste meines Vereins. Jede Zeile ist ein Mitglied. Die Spalten sind: Kennung, Eintrittsjahr, Anzahl besuchter Veranstaltungen (letzte 12 Monate), Newsletter geöffnet (ja/nein), Beitrag bezahlt (ja/nein), Ehrenamt aktiv (ja/nein).

Analysiere die Daten und erstelle drei Kategorien:
1. GRÜN: Aktive Mitglieder mit geringem Austrittsrisiko
2. GELB: Mitglieder mit Warnsignalen (Handlungsbedarf)
3. ROT: Mitglieder mit hohem Austrittsrisiko

Begründe die Einordnung für jedes Mitglied. Schlage für die Kategorien GELB und ROT jeweils eine konkrete Maßnahme vor.

Daten:
[Hier die anonymisierte Tabelle einfügen]
```

**Schritt 4:** Du bekommst eine sortierte Liste zurück. Jetzt kommt der wichtigste Schritt — und der ist nicht digital: Sprich mit den Menschen. Die KI sagt dir, wen du ansprechen solltest. Das Gespräch führst du selbst.

### Gegenmaßnahmen: Was tun mit den Ergebnissen?

| Kategorie | Maßnahme | Beispiel |
|---|---|---|
| GELB | Persönliche Nachricht | „Hallo Maria, wir haben dich beim Stammtisch vermisst. Ist alles okay bei dir?" |
| GELB | Angebot anpassen | Neues Trainingsangebot, andere Zeiten, Familienmitgliedschaft |
| ROT | Direktes Gespräch | Anruf oder persönliches Treffen. Fragen: Was fehlt? Was können wir besser machen? |
| ROT | Feedback einholen | Kurze Umfrage: „Wir möchten besser werden. Was würde dich wieder aktivieren?" |

Der KI-Prompt für eine Feedback-Umfrage:

```
Erstelle eine kurze Umfrage (maximal 5 Fragen) für Mitglieder, die in den letzten Monaten weniger aktiv waren. Der Ton soll wertschätzend sein, nicht vorwurfsvoll. Ziel: Herausfinden, was der Verein besser machen kann. Verein: [Vereinstyp] mit [Mitgliederzahl] Mitgliedern.
```

**Ausgefülltes Beispiel:**

```
Erstelle eine kurze Umfrage (maximal 5 Fragen) für Mitglieder, die in den letzten Monaten weniger aktiv waren. Der Ton soll wertschätzend sein, nicht vorwurfsvoll. Ziel: Herausfinden, was der Verein besser machen kann. Verein: Kulturverein mit 85 Mitgliedern.
```

### Datenschutz-Grenzen

Mitgliederanalyse ist erlaubt, solange du die Regeln einhältst:

- Analysiere nur Daten, die du im Rahmen der Mitgliedschaft ohnehin erhebst (Teilnahmelisten, Beitragszahlungen).
- Gib keine personenbezogenen Daten in KI-Tools ein. Arbeite mit anonymisierten Datensätzen.
- Informiere die Mitglieder in der Datenschutzerklärung, dass der Verein Mitgliederdaten zur Verbesserung des Angebots auswertet. Die KI-Richtlinie aus Modul 1 deckt das ab.
- Nutze die Ergebnisse für persönliche Ansprache — nicht für automatisierte Entscheidungen. Niemand wird aufgrund eines Algorithmus aus dem Verein geworfen.

### Realitätscheck

Ehrlich gesagt: Professionelle Churn Prediction (Austrittsvorhersage) mit Algorithmen ist für die meisten Vereine heute noch Zukunftsmusik. Du brauchst dafür große Datenmengen, saubere Datensätze und statistische Modelle. Das haben Unternehmen mit Tausenden Kunden. Die meisten Vereine nicht.

Was du aber heute schon kannst: Deine vorhandenen Daten systematisch ansehen. Die KI hilft dir dabei, Muster zu erkennen, die du beim Durchscrollen der Excel-Tabelle übersiehst. Das ist kein Machine Learning. Das ist gesunder Menschenverstand, unterstützt durch eine KI, die schneller liest als du.

### Wo du die Daten herbekommst

Du musst keine neue Software kaufen. Die meisten Vereine haben die nötigen Daten schon:

**Teilnahme-Daten:** Wenn du Anwesenheitslisten führst (Papier oder digital), übertrage die Zahlen in eine einfache Tabelle. Es reicht eine Spalte „Anzahl Teilnahmen letzte 12 Monate". Wenn du keine Listen führst, fang heute damit an — eine Strichliste am Eingang reicht.

**Newsletter-Daten:** Dein Newsletter-Tool zeigt dir, wer eure E-Mails öffnet. Exportiere die Öffnungsraten der letzten drei Monate. Mitglieder mit 0 Prozent Öffnungsrate in drei Monaten bekommen ein „Nein" in der Spalte.

**Beitragsdaten:** Deine Buchhaltung oder Vereinssoftware zeigt, wer pünktlich zahlt und wer gemahnt werden muss. Eine Spalte „Beitrag bezahlt (ja/nein)" reicht.

**Engagement-Daten:** Wer hat sich in den letzten 12 Monaten freiwillig für etwas gemeldet? Helfer beim Sommerfest, Kuchen für den Basar, Fahrdienst zum Auswärtsspiel. Eine einfache Ja/Nein-Spalte.

> **Praxistipp**
> Mach die Analyse einmal pro Quartal. Trag dir einen wiederkehrenden Termin ein. 30 Minuten reichen. Vier Mal im Jahr hinschauen bringt mehr als einmal im Jahr eine Riesen-Aktion.

### Praxisübung Lektion 3.2

1. Lade dir die Beispiel-Mitgliederliste herunter (als Kursunterlage bereitgestellt) oder erstelle eine anonymisierte Version deiner echten Mitgliederliste (mindestens 10 Einträge).
2. Gib die Daten mit dem Analyse-Prompt in einen KI-Textgenerator deiner Wahl ein.
3. Sortiere die Ergebnisse in die drei Kategorien GRÜN, GELB, ROT.
4. Formuliere für zwei GELB- oder ROT-Mitglieder eine konkrete Ansprache-Nachricht.

Wenn du fertig bist, hast du: Eine Einordnung deiner Mitglieder nach Aktivitätsgrad und zwei fertige Nachrichten zur Reaktivierung.

---
