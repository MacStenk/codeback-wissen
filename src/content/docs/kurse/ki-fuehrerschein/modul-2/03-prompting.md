---
title: "Prompting für Vereine"
description: "Modul 2: Kommunikation — Prompting für Vereine"
sidebar:
  order: 3
---

Du hast in den Lektionen 2.1 und 2.2 fertige Vorlagen kopiert und angepasst. Das funktioniert für Standardtexte. Aber was, wenn du einen Text brauchst, für den es keine Vorlage gibt? Wenn der Bürgermeister zur Vereinsgründung kommt und du eine Rede brauchst? Wenn die Fördermittelstelle eine Projektskizze verlangt? Dann brauchst du das Handwerk, um selbst gute Prompts zu schreiben.

### Was ein Prompt ist

Prompt (= Eingabetext) ist der Text, den du in deinen KI-Textgenerator eintippst. Je klarer dein Prompt, desto besser das Ergebnis. Ein Prompt wie „Schreib was über unseren Verein" liefert einen generischen Text. Ein Prompt mit Kontext, Rolle und klarer Erwartung liefert einen Text, der nach eurem Verein klingt.

### Die RICE-Methode für Vereins-Prompts

RICE ist eine einfache Struktur, die dir hilft, vollständige Prompts zu schreiben. Vier Bausteine, die du in dieser Reihenfolge ausfüllst:

**R = Rolle**
Wer soll die KI sein? Je genauer du die Rolle beschreibst, desto passender wird das Ergebnis.

**I = Input**
Welche Fakten hat die KI zur Verfügung? Daten, Zahlen, Stichworte, Hintergrund.

**C = Context**
In welchem Umfeld bewegt sich der Text? Was ist der Verein? Wer liest den Text?

**E = Erwartung**
Was soll rauskommen? Textart, Länge, Ton, Struktur.

Ein RICE-Prompt sieht so aus:

```
R: Du bist [Rolle].
I: Hier sind die Fakten: [Fakten].
C: Hintergrund: [Kontext über Verein und Zielgruppe].
E: Schreibe [Textart], [Länge], [Ton], [besondere Anforderungen].
```

### RICE in der Praxis: Drei Vereinstypen

**Beispiel 1: Sportverein**

Der TSV Grünberg 1920 e.V. (300 Mitglieder, Fußball und Turnen) braucht einen Text für die Lokalzeitung über die neue Kooperation mit der Grundschule.

```
R: Du bist der Pressesprecher eines Sportvereins mit 300 Mitgliedern 
   in einer Kleinstadt.
I: Fakten: Der TSV Grünberg startet ab Mai eine Sport-AG an der 
   Grundschule am Park. Zwei Trainer leiten die AG. 25 Kinder haben 
   sich angemeldet. Die AG findet dienstags von 14 bis 15:30 Uhr statt. 
   Die Kooperation läuft zunächst ein Jahr. Die Gemeinde übernimmt 
   die Hallenkosten.
C: Der TSV ist lokal bekannt für gute Jugendarbeit. Die Zielgruppe des 
   Textes sind Eltern, Gemeinderäte und potenzielle Sponsoren. Die 
   Lokalzeitung hat eine Auflage von 8.000.
E: Schreibe eine Pressemitteilung, maximal 200 Wörter. Sachlich-freundlicher 
   Ton. Schließe mit einem Zitat des Vorsitzenden Bernd Hoffmann.
```

Diesen Prompt gibst du in deinen KI-Textgenerator ein. Das Ergebnis liest sich dann so:

> **TSV Grünberg startet Sport-AG an der Grundschule am Park**
>
> Grünberg, März 2026 — Ab Mai bietet der TSV Grünberg 1920 e.V. eine wöchentliche Sport-AG an der Grundschule am Park an. 25 Kinder der Klassen 1 bis 4 werden jeden Dienstag von 14 bis 15:30 Uhr von zwei Vereinstrainern betreut. Die Kooperation ist zunächst auf ein Jahr angelegt. Die Gemeinde übernimmt die Hallenkosten.
>
> Mit dem Angebot baut der TSV seine Jugendarbeit weiter aus. Die Kinder lernen spielerisch Grundlagen aus den Bereichen Fußball und Turnen. Eltern und Lehrkräfte hatten den Bedarf an Bewegungsangeboten im Nachmittagsbereich mehrfach geäußert.
>
> „Wir wollen Kinder für Sport begeistern, bevor sie den ganzen Nachmittag vor dem Bildschirm sitzen. Die Kooperation mit der Grundschule ist der richtige Weg", sagt Bernd Hoffmann, 1. Vorsitzender des TSV.
>
> **Kontakt:** TSV Grünberg 1920 e.V., Bernd Hoffmann, info@tsv-gruenberg.de

**Beispiel 2: Kulturverein**

Der Kulturverein Altes Rathaus e.V. (85 Mitglieder) plant eine Lesung mit einer lokalen Autorin und braucht eine Einladung per E-Mail an die Mitglieder.

```
R: Du bist die Öffentlichkeitsbeauftragte eines kleinen Kulturvereins 
   in einer ländlichen Gemeinde.
I: Fakten: Lesung mit der Autorin Maria Berger am 24. April 2026, 
   19:30 Uhr im Alten Rathaus. Sie liest aus ihrem neuen Buch 
   „Dorfgeschichten". Eintritt frei, Spenden willkommen. 
   Im Anschluss Gespräch mit der Autorin bei Wein und Käse.
C: Der Verein pflegt einen warmherzigen, einladenden Ton. Viele Mitglieder 
   sind über 60. E-Mails werden aufmerksam gelesen. Der Verein legt 
   Wert auf Gemeinschaft.
E: Schreibe eine Einladungs-E-Mail, maximal 150 Wörter. Warmherziger Ton. 
   Betreffzeile angeben.
```

Das Ergebnis:

> **Betreff:** Leseabend mit Maria Berger — 24. April im Alten Rathaus
>
> Liebe Vereinsfreunde,
>
> am 24. April um 19:30 Uhr liest Maria Berger im Alten Rathaus aus ihrem neuen Buch „Dorfgeschichten". Geschichten über Orte wie unseren — mal lustig, mal nachdenklich, immer nah am Leben.
>
> Im Anschluss an die Lesung könnt ihr mit der Autorin ins Gespräch kommen. Für Wein und Käse ist gesorgt.
>
> Der Eintritt ist frei. Über eine kleine Spende für die Vereinsarbeit freuen wir uns.
>
> Bringt gerne Freunde und Nachbarn mit. Platz haben wir genug.
>
> Wir freuen uns auf einen schönen Abend mit euch!
>
> Herzliche Grüße
> Euer Vorstandsteam

**Beispiel 3: Sozialverein**

Die Nachbarschaftshilfe Waldstadt e.V. (120 Mitglieder) schreibt einen Jahresbericht-Auszug für die Website.

```
R: Du bist der Geschäftsführer eines gemeinnützigen Sozialvereins, der 
   Senioren und Familien in einem Stadtteil unterstützt.
I: Zahlen 2025: 840 Einsätze (Einkaufsbegleitung, Behördengänge, 
   Gartenhilfe). 52 aktive Ehrenamtliche. 38 neue Ehrenamtliche gewonnen. 
   95% der Betreuten bewerten den Service mit „sehr gut" oder „gut". 
   Budget: 28.000 EUR, davon 60% Spenden, 40% Fördermittel.
C: Die Nachbarschaftshilfe ist seit 15 Jahren im Stadtteil aktiv. 
   Zielgruppe des Textes: Stadtverwaltung, Fördergeber, potenzielle 
   Spender und Ehrenamtliche. Der Verein kommuniziert sachlich, 
   aber menschlich.
E: Schreibe einen Jahresbericht-Abschnitt für die Website. 250 Wörter. 
   Sachlich mit konkreten Zahlen. Ein Absatz Ausblick auf 2026.
```

Das Ergebnis:

> **Jahresrückblick 2025: Mehr Einsätze, mehr Ehrenamtliche, mehr Wirkung**
>
> Die Nachbarschaftshilfe Waldstadt e.V. blickt auf ein starkes Jahr 2025 zurück. Insgesamt haben unsere Ehrenamtlichen 840 Einsätze geleistet. Das sind 15 Prozent mehr als im Vorjahr. Die Einsätze umfassen Einkaufsbegleitungen, Unterstützung bei Behördengängen und Gartenhilfe für ältere und mobilitätseingeschränkte Nachbarn.
>
> Unser Team ist gewachsen. 38 neue Ehrenamtliche haben sich 2025 angemeldet. Insgesamt engagieren sich jetzt 52 Freiwillige regelmäßig. Die Zufriedenheit der Betreuten bleibt hoch: 95 Prozent bewerten unseren Service mit „sehr gut" oder „gut".
>
> Finanziell steht der Verein auf stabilen Beinen. Das Jahresbudget von 28.000 EUR speist sich zu 60 Prozent aus Spenden und zu 40 Prozent aus Fördermitteln. Wir danken allen Spenderinnen und Spendern sowie der Stadtverwaltung für das Vertrauen.
>
> **Ausblick 2026:** Im kommenden Jahr wollen wir unser Angebot um eine digitale Sprechstunde erweitern. Viele ältere Nachbarn brauchen Hilfe bei Online-Banking, E-Mail und Behörden-Apps. Dafür suchen wir zehn weitere Ehrenamtliche mit Geduld und Technik-Grundkenntnissen. Interessierte melden sich bei Anna Berger unter anna@nachbarschaftshilfe-waldstadt.de.

### Tone of Voice definieren

Verschiedene Vereinstypen sprechen verschieden. Du kannst der KI den Ton deines Vereins beibringen:

| Vereinstyp | Ton | Beispiel-Anweisung |
|---|---|---|
| Sportverein | Locker, direkt, sportlich | „Schreibe, als würdest du am Spielfeldrand mit einem Elternteil sprechen." |
| Kulturverein | Warmherzig, gepflegt, einladend | „Schreibe wie eine Einladung zum Abendessen bei Freunden — persönlich, aber nicht zu lässig." |
| Sozialverein | Empathisch, sachlich, professionell | „Schreibe für Fördergeber und Spender: konkrete Zahlen, klare Wirkung, menschlicher Ton." |

Teste denselben Inhalt mit verschiedenen Ton-Anweisungen. Du wirst sehen, wie stark sich die Ergebnisse unterscheiden.

### System-Prompts: Der Vereins-Assistent

Ein System-Prompt ist eine dauerhafte Anweisung an die KI. Viele KI-Textgeneratoren bieten diese Funktion unter verschiedenen Namen an (z.B. „GPTs erstellen" in ChatGPT Plus, „Projects" in Claude oder ähnliche Funktionen in anderen Tools). Der Vorteil: Du musst den Kontext nicht jedes Mal neu eingeben.

So erstellst du einen Vereins-Assistenten (die genauen Schritte variieren je nach Tool — lies dazu die aktuelle Hilfe-Seite deines KI-Tools):

1. Öffne deinen KI-Textgenerator und suche die Funktion für benutzerdefinierte Assistenten oder dauerhafte Anweisungen.
2. Gib folgenden System-Prompt ein:

```
Du bist der Kommunikations-Assistent für [Vereinsname].

Über den Verein:
- [Vereinstyp, z.B. Sportverein / Kulturverein / Sozialverein]
- [Mitgliederzahl]
- [Standort]
- [Schwerpunkte / Abteilungen]
- [Gründungsjahr]

Tonalität:
- [Beschreibung des gewünschten Tons]
- Du-Anrede bei internen Texten, Sie-Anrede bei externen (Presse, Sponsoren, Behörden)

Regeln:
- Keine personenbezogenen Daten verarbeiten
- Alle Texte sind Entwürfe und müssen vom Vorstand freigegeben werden
- Fakten und Zahlen nur verwenden, wenn sie im Prompt stehen
- Bei Unsicherheit nachfragen statt erfinden

Häufige Textarten:
- Newsletter (monatlich, ca. 300 Wörter)
- Pressemitteilungen (max. 200 Wörter)
- Social-Media-Posts (Facebook und Instagram)
- Einladungen und Rundmails
```

3. Speichere den Assistenten.
4. Ab jetzt schreibst du nur noch: „Erstelle einen Newsletter für März. Themen: [...]." Den Kontext hat der Assistent bereits.

> **Praxistipp**
> Aktualisiere deinen System-Prompt alle drei Monate. Neue Abteilungen, geänderte Ansprechpartner, aktuelle Mitgliederzahlen. Ein veralteter System-Prompt erzeugt veraltete Texte.

### Iteratives Prompting

Der erste Entwurf ist selten perfekt. Das ist normal. Gib der KI Feedback wie einem Menschen:

- „Der Text ist zu förmlich. Mach ihn lockerer."
- „Der zweite Absatz ist zu lang. Kürze ihn auf 3 Sätze."
- „Füge am Ende einen konkreten Termin ein: 15. April, 18 Uhr."
- „Das Zitat klingt steif. Formuliere es so, wie ein Vereinsvorsitzender wirklich reden würde."

Du musst nicht jedes Mal den ganzen Prompt neu schreiben. Arbeite mit dem Ergebnis weiter. Zwei bis drei Runden Feedback reichen meistens.

### Die 5 häufigsten Prompting-Fehler

**Fehler 1: Zu vage.**
Schlecht: „Schreib was über unseren Verein."
Besser: „Schreibe eine Pressemitteilung über das Sommerfest des TSV Grünberg am 21. Juni."

**Fehler 2: Zu viel auf einmal.**
Schlecht: „Erstelle Newsletter, Pressemitteilung, drei Social-Media-Posts und eine Einladung."
Besser: Einen Text pro Prompt. Du behältst die Kontrolle und das Ergebnis wird besser.

**Fehler 3: Keine Tonangabe.**
Schlecht: „Schreibe eine Einladung."
Besser: „Schreibe eine Einladung. Ton: warmherzig und persönlich."

**Fehler 4: Keine Längenvorgabe.**
Ohne Längenvorgabe schreibt die KI oft zu viel. Gib immer eine Zielgröße an: „maximal 150 Wörter" oder „ein Absatz".

**Fehler 5: Kein Gegenlesen.**
Die KI macht keine Rechtschreibfehler. Aber sie erfindet Fakten, setzt falsche Daten ein und formuliert manchmal daneben. Jeder Text braucht deine Prüfung. Immer.

### Praxisübung

1. Erstelle einen System-Prompt für deinen Verein nach der Vorlage oben.
2. Generiere mit dem RICE-Verfahren einen Text, für den es keine Vorlage aus Lektion 2.1 gibt. Zum Beispiel: eine Rede, eine Grußbotschaft, eine Projektskizze.
3. Lass denselben Text in drei verschiedenen Tonalitäten generieren: locker, sachlich, feierlich.
4. Vergleiche die drei Ergebnisse. Welcher Ton passt am besten zu deinem Verein?
5. Überarbeite den besten Text durch zwei Runden iteratives Prompting.

**Wenn du fertig bist, hast du:** Einen funktionierenden System-Prompt für deinen Verein, einen fertigen Text in der passenden Tonalität und Erfahrung mit iterativem Prompting.

---
