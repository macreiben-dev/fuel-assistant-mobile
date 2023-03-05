import { describe, expect } from "@jest/globals";
import { routeToIcon } from "../../navigation/tabbarIconConfig";

describe("navigation configuration", () => {
  test("Given routeName is StintDetail then icon is battery-half", () => {
    let actual = routeToIcon("StintDetail");

    expect(actual).toBe("battery-half");
  });
  test("Given routeName is StratDetail then icon is brain", () => {
    let actual = routeToIcon("StratDetail");

    expect(actual).toBe("brain");
  });
});
