import { strict as assert } from "assert";
import { Position, Selection } from "vscode";
import { availableDateFormats } from "../constants";
import { generateAlpha, generateCounter, generateDate, generateRoman, generateUuid } from "../generators";
import { formatDate, sortCursors, toAlpha, toRoman } from "../utils";

suite("Utils", () => {
  test("toAlpha should convert numbers to lowercase letters", () => {
    assert.strictEqual(toAlpha(0, false), "a");
    assert.strictEqual(toAlpha(1, false), "b");
    assert.strictEqual(toAlpha(25, false), "z");
    assert.strictEqual(toAlpha(26, false), "a");
  });

  test("toAlpha should convert numbers to uppercase letters", () => {
    assert.strictEqual(toAlpha(0, true), "A");
    assert.strictEqual(toAlpha(1, true), "B");
    assert.strictEqual(toAlpha(25, true), "Z");
  });

  test("toRoman should convert numbers to lowercase Roman numerals", () => {
    assert.strictEqual(toRoman(1, false), "i");
    assert.strictEqual(toRoman(4, false), "iv");
    assert.strictEqual(toRoman(9, false), "ix");
    assert.strictEqual(toRoman(10, false), "x");
    assert.strictEqual(toRoman(58, false), "lviii");
    assert.strictEqual(toRoman(1994, false), "mcmxciv");
  });

  test("toRoman should convert numbers to uppercase Roman numerals", () => {
    assert.strictEqual(toRoman(1, true), "I");
    assert.strictEqual(toRoman(4, true), "IV");
    assert.strictEqual(toRoman(9, true), "IX");
    assert.strictEqual(toRoman(10, true), "X");
    assert.strictEqual(toRoman(58, true), "LVIII");
    assert.strictEqual(toRoman(1994, true), "MCMXCIV");
  });

  test("formatDate should handle ISO format", () => {
    const date = new Date("2026-04-05T00:00:00Z");
    const result = formatDate("ISO", date);
    assert.strictEqual(typeof result, "string");
    assert(result.includes("2026"));
  });

  test("formatDate should handle UTC format", () => {
    const date = new Date("2026-04-05T00:00:00Z");
    const result = formatDate("UTC", date);
    assert.strictEqual(typeof result, "string");
    assert(result.length > 0);
  });

  test("formatDate should handle Locale format", () => {
    const date = new Date("2026-04-05T00:00:00Z");
    const result = formatDate("Locale", date);
    assert.strictEqual(typeof result, "string");
    assert(result.length > 0);
  });

  test("formatDate should handle Unix format", () => {
    const date = new Date("2026-04-05T00:00:00Z");
    const result = formatDate("Unix", date);
    assert(Number.isFinite(Number(result)));
  });

  test("formatDate should return empty string for unknown format", () => {
    const date = new Date();
    const result = formatDate("UnknownFormat", date);
    assert.strictEqual(result, "");
  });

  test("sortCursors should sort selections by line and character", () => {
    const selections = [new Selection(new Position(2, 5), new Position(2, 5)), new Selection(new Position(1, 10), new Position(1, 10)), new Selection(new Position(2, 3), new Position(2, 3))];

    const sorted = sortCursors(selections);

    assert.strictEqual(sorted[0].start.line, 1);
    assert.strictEqual(sorted[1].start.line, 2);
    assert.strictEqual(sorted[1].start.character, 3);
    assert.strictEqual(sorted[2].start.character, 5);
  });

  test("sortCursors should not modify original array", () => {
    const selections = [new Selection(new Position(2, 5), new Position(2, 5)), new Selection(new Position(1, 10), new Position(1, 10))];

    const original = [...selections];
    sortCursors(selections);

    assert.deepStrictEqual(selections, original);
  });
});

suite("Generators", () => {
  test("generateCounter should create array of numbers starting from 0", () => {
    const gen = generateCounter(0);
    const result = gen(5);

    assert.strictEqual(result.length, 5);
    assert.deepStrictEqual(result, ["0", "1", "2", "3", "4"]);
  });

  test("generateCounter should create array of numbers starting from custom value", () => {
    const gen = generateCounter(10);
    const result = gen(3);

    assert.deepStrictEqual(result, ["10", "11", "12"]);
  });

  test("generateCounter should handle negative start", () => {
    const gen = generateCounter(-2);
    const result = gen(4);

    assert.deepStrictEqual(result, ["-2", "-1", "0", "1"]);
  });

  test("generateAlpha should create lowercase alphabetic sequence", () => {
    const gen = generateAlpha(0, false);
    const result = gen(3);

    assert.deepStrictEqual(result, ["a", "b", "c"]);
  });

  test("generateAlpha should create uppercase alphabetic sequence", () => {
    const gen = generateAlpha(0, true);
    const result = gen(3);

    assert.deepStrictEqual(result, ["A", "B", "C"]);
  });

  test("generateAlpha should wrap around after z", () => {
    const gen = generateAlpha(25, false);
    const result = gen(2);

    assert.deepStrictEqual(result, ["z", "a"]);
  });

  test("generateRoman should create lowercase Roman numeral sequence", () => {
    const gen = generateRoman(0, false);
    const result = gen(4);

    assert.deepStrictEqual(result, ["i", "ii", "iii", "iv"]);
  });

  test("generateRoman should create uppercase Roman numeral sequence", () => {
    const gen = generateRoman(0, true);
    const result = gen(4);

    assert.deepStrictEqual(result, ["I", "II", "III", "IV"]);
  });

  test("generateRoman should start from custom value", () => {
    const gen = generateRoman(9, true);
    const result = gen(2);

    assert.deepStrictEqual(result, ["X", "XI"]);
  });

  test("generateUuid should create array of UUIDs", () => {
    const gen = generateUuid();
    const result = gen(3);

    assert.strictEqual(result.length, 3);
    // Check UUID format (v4 format)
    assert(result.every((uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid)));
  });

  test("generateUuid should generate different UUIDs", () => {
    const gen = generateUuid();
    const result = gen(3);

    const unique = new Set(result);
    assert.strictEqual(unique.size, 3);
  });

  test("generateDate should create array of identical dates", () => {
    const gen = generateDate();
    const result = gen(3);

    assert.strictEqual(result.length, 3);
    assert.strictEqual(result[0], result[1]);
    assert.strictEqual(result[1], result[2]);
  });

  test("generateDate should use configuration format", () => {
    const gen = generateDate();
    const result = gen(1);

    // Result should be non-empty string
    assert.strictEqual(typeof result[0], "string");
    assert(result[0].length > 0);
  });
});

suite("Constants", () => {
  test("availableDateFormats should contain expected formats", () => {
    assert(availableDateFormats.includes("ISO"));
    assert(availableDateFormats.includes("UTC"));
    assert(availableDateFormats.includes("Locale"));
    assert(availableDateFormats.includes("Unix"));
  });
});
