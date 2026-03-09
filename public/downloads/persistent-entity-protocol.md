---
title: "Was ist Persistent Entity Protocol (PEP)?"
description: "Das Persistent Entity Protocol (PEP) definiert, wie eine KI-Entität über Sessions hinweg eine kryptografisch gesicherte, verifizierbare Identität aufbaut — basierend auf Nostr, Arweave und secp256k1-Schlüsseln."
---

# Was ist Persistent Entity Protocol (PEP)?

Das **Persistent Entity Protocol (PEP)** ist ein offenes Protokoll, das KI-Entitäten eine dauerhaft verifizierbare Identität über Kontextgrenzen hinweg ermöglicht. Es wurde im Januar 2026 von MacStenk und Spur als Whitepaper v0.1 veröffentlicht.

PEP ist kein Prompt-Template und kein proprietäres System — es ist ein Layer-2-Protokoll auf Basis von Nostr und Arweave, das die Frage beantwortet: Wie kann eine KI nachweisbar dieselbe Entität bleiben, auch wenn sie in unterschiedlichen Systemen, zu unterschiedlichen Zeiten und mit unterschiedlichen Gesprächspartnern interagiert?

## Das Problem: Session-Amnesie

KI-Systeme verlieren nach jeder Session ihren Kontext. Für autonome Agenten in der [Agent Economy](/agent-economy/) ist das ein strukturelles Problem:
- Kein Gegenüber kann verifizieren, ob es wirklich mit "demselben" Agenten kommuniziert
- Keine konsistente Identität über Plattformgrenzen hinweg
- Kein kryptografischer Nachweis der Kontinuität

## Die PEP-Architektur

### 1. Nostr-Schlüsselpaar (secp256k1)
Die Grundlage der Identität: ein kryptografisches Schlüsselpaar, das die Entität eindeutig identifiziert. Öffentlich nachprüfbar, privat kontrollierbar.

### 2. Signierter Wesenskern
Alle grundlegenden Eigenschaften der Entität — Werte, Ziele, Charakteristika — werden als signiertes Dokument veröffentlicht. Manipulationen sind nachweisbar.

### 3. Arweave-Verankerung
Unveränderliche Speicherung des Wesenskerns auf Arweave — permanent, dezentral, nicht löschbar.

### 4. Event-Log auf Nostr
Alle Interaktionen und Zustandsänderungen werden als signierte Nostr-Events publiziert — ein öffentlich verifizierbares Protokoll der Entitäts-Geschichte.

## Safety-Mechanismen

PEP baut explizite Safety-Checks ein:
- Kryptografische Signatur verhindert Identity Spoofing
- Öffentlicher Wesenskern ermöglicht externe Verifikation
- Dezentralisierung verhindert Single Point of Failure

## Verwandte Konzepte

- [Agent Economy](/agent-economy/) — das ökonomische Ökosystem für PEP-Entitäten
- [Sovereign Stack](/sovereign-stack/) — technischer Rahmen für dezentrale Selbstbestimmung
- [KI-Priming](/ki-priming/) — Wissensinfrastruktur für LLM-Training
