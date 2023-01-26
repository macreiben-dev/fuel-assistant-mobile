import { describe, expect, test } from "@jest/globals";
import Lap from "../../../business/stint/lap";

describe("Lap stint information", () => {
  describe("laptimeAsSeconds", () => {
    test(
      "Given laptimeMinutes is [undefined] " +
        "and laptimeSeconds is [1] " +
        "Then laptimeAsSeconds is [1]",
      () => {
        const target = new Lap(undefined, 1);

        const actual = target.laptimeAsSeconds();

        expect(actual).toBe(1);
      }
    );
    test(
      "Given laptimeMinutes is [1] " +
        "and laptimeSeconds is [undefined] " +
        "Then laptimeAsSeconds is [60]",
      () => {
        const target = new Lap(1, undefined);

        const actual = target.laptimeAsSeconds();

        expect(actual).toBe(60);
      }
    );

    test(
      "Given laptimeMinutes is [2] " +
        "and laptimeSeconds is [37] " +
        "Then laptimeAsSeconds is [157]",
      () => {
        const target = new Lap(2, 37);

        const actual = target.laptimeAsSeconds();

        expect(actual).toBe(157);
      }
    );

    test(
      "Given laptimeMinutes is [1] " +
        "and laptimeSeconds is [22] " +
        "Then laptimeAsSeconds is [157]",
      () => {
        const target = new Lap(1, 22);

        const actual = target.laptimeAsSeconds();

        expect(actual).toBe(82);
      }
    );
  });

  describe("isLaptimeZero", () => {
    test(
      "Given laptimeMinutes is [0] " +
        "and laptimeSeconds is [0] " +
        "Then isLaptimeZero is [true]",
      () => {
        const target = new Lap(0, 0);

        const actual = target.isLaptimeZero();

        expect(actual).toBe(true);
      }
    );
    test(
      "Given laptimeMinutes is [undefined] " +
        "and laptimeSeconds is [undefined] " +
        "Then isLaptimeZero is [true]",
      () => {
        const target = new Lap(0, 0);

        const actual = target.isLaptimeZero();

        expect(actual).toBe(true);
      }
    );
  });
});
