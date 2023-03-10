import { floatConverter } from "../../business/converter";

describe("Float conversion", () => {
  test('Given input is "hello" then return undefined.', () => {
    let actual = floatConverter("hello");

    expect(actual).toBe(undefined);
  });

  test('and input is "helloAgain" then return undefined.', () => {
    let actual = floatConverter("helloAgain");

    expect(actual).toBe(undefined);
  });

  test('Given input is "13" then return 13', () => {
    let actual = floatConverter("13");

    expect(actual).toBe(13);
  });

  test('and input is "15" then return 15', () => {
    let actual = floatConverter("15");

    expect(actual).toBe(15);
  });

  test('Given input is "13.2" then return undefined.', () => {
    let actual = floatConverter("13.2");

    expect(actual).toBe(13.2);
  });
  test('Given input is "16.3" then return undefined.', () => {
    let actual = floatConverter("16.3");

    expect(actual).toBe(16.3);
  });
  test("Given input is 14.5 then return undefined.", () => {
    let actual = floatConverter(14.5);

    expect(actual).toBe(14.5);
  });
  test("Given input is 19.1 then return undefined.", () => {
    let actual = floatConverter(19.1);

    expect(actual).toBe(19.1);
  });
});
