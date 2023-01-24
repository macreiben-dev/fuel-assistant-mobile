import { formatAsPercent } from "../../../components/formating/formating";
import { expect } from "@jest/globals";

describe("formating percent", () => {
  test("Given 0.8 then display 80%", () => {
    let original = 0.8;

    const actual = formatAsPercent(original);

    expect(actual).toBe("80%");
  });

  test("Given 0.55 then display 55%", () => {
    let original = 0.55;

    const actual = formatAsPercent(original);

    expect(actual).toBe("55%");
  });

  test("Given undefined then display NA", () => {
    let original = undefined;

    const actual = formatAsPercent(original);

    expect(actual).toBe("NA");
  });

  test("Given NaN then display NA", () => {
    let original = NaN;

    const actual = formatAsPercent(original);

    expect(actual).toBe("NA");
  });
});
