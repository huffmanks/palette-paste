# PalettePaste

Quickly generate and insert sequences at your cursor(s) in VS Code. Supports numbers, letters, Roman numerals, dates and UUIDs.

PalettePaste was inspired by [Text Pastry for VS Code](https://marketplace.visualstudio.com/items?itemName=jkjustjoshing.vscode-text-pastry) and offers similar multi-cursor sequence generation in a lightweight, minimal package. It adds support for various date formats and has no runtime dependencies, making it a practical, straightforward alternative.

## Features

Generate common sequences instantly:

- Numbers (0-based, 1-based, or custom start).
- Letters (a–z, A–Z).
- Roman numerals (i, ii, iii / I, II, III).
- Dates (ISO, UTC, Locale, Unix)
- UUIDs.

## Usage

1. Place one or more cursors where you want to insert sequences.
2. Open the Command Palette (Cmd/Ctrl + Shift + P).
3. Run a PalettePaste command (see below).
4. The sequence will be inserted across all cursors.

## Commands

- PalettePaste: Numbers (0…)
- PalettePaste: Numbers (1…)
- PalettePaste: Numbers (Custom…)
- PalettePaste: Letters (a…)
- PalettePaste: Letters (A…)
- PalettePaste: Roman (i…)
- PalettePaste: Roman (I…)
- PalettePaste: UUID
- PalettePaste: Date
- PalettePaste: Set Date Format

## Release Notes

### 1.0.1

- Updated extension name and related documentation (README, repository description, changelog)

### 1.0.0

- Initial release of PalettePaste.
