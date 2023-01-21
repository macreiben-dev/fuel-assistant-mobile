import { stintDurationService } from "../../business/stint/stintDurationService";

describe("Stint duration", () => {
  test('Given stint duration is "hello" then do not update stint duration in store.', () => {
    // ARRANGE
    let isStoreInvoked = false;

    var originalProps = {
      changeStintDuration: (input) => {
        isStoreInvoked = true;
      },
    };

    var validator = (input) => {
      if (input == "hello") {
        return "Some error message";
      }

      return undefined;
    };

    // ACT
    stintDurationService("hello", originalProps, undefined, validator);

    // ASSERT
    expect(isStoreInvoked).toBe(false);
  });

  test("Given stint duration is 12 then update stint duration in store.", () => {
    // ARRANGE
    let storeSpy = {
      actualInput: undefined,
      isStoreInvoked: false,
    };

    var originalProps = {
      changeStintDuration: (input) => {
        storeSpy.actualInput = input;
        storeSpy.isStoreInvoked = true;
      },
    };

    var validator = (input) => {
      if (input == 12) {
        return undefined;
      }

      return "Some validation error message.";
    };

    var converter = (input) => {
      if (input == 12) {
        return 12;
      }
      return undefined;
    };

    // ACT
    stintDurationService(12, originalProps, converter, validator);

    // ASSERT
    expect(storeSpy.actualInput).toBe(12);
    expect(storeSpy.isStoreInvoked).toBe(true);
  });
});
