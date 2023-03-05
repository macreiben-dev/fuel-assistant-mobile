import { describe, expect } from "@jest/globals";
import target from "../../navigation/tabbarIconConfig";

describe("navigation configuration", () => {
  test("Given routeName is StintDetail then icon is battery-half", () => {
    let actual = target("StintDetail");

    expect(actual).toBe("battery-half");
  });
});
