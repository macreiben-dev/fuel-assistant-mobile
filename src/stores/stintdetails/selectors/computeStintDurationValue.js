import { padStart } from "./formating";

const DURATION_FORMAT_PADDING = 2;
const DURATION_FORMAT_CHARACTER = "0";
const SECONDS_IN_ONE_MINUTE = 60.0;
const SECONDS_IN_ONE_HOUR = 60.0 * 60.0;

const computeStintDurationValue = (stintTotalTimeSeconds, stintPercent) => {
  const stintTimeRatioAsSeconds = stintTotalTimeSeconds * stintPercent;

  let hoursDigit = Math.trunc(stintTimeRatioAsSeconds / SECONDS_IN_ONE_HOUR);

  let hourPartInSeconds = hoursDigit * SECONDS_IN_ONE_HOUR;

  let minutePartInSeconds = stintTimeRatioAsSeconds - hourPartInSeconds;

  let minutesDigit = Math.trunc(minutePartInSeconds / SECONDS_IN_ONE_MINUTE);

  let secondsDigit =
    stintTimeRatioAsSeconds -
    hoursDigit * SECONDS_IN_ONE_HOUR -
    minutesDigit * SECONDS_IN_ONE_MINUTE;

  let hoursAsString = padStart(
    hoursDigit,
    DURATION_FORMAT_PADDING,
    DURATION_FORMAT_CHARACTER
  );

  let minutesAsString = padStart(
    minutesDigit,
    DURATION_FORMAT_PADDING,
    DURATION_FORMAT_CHARACTER
  );

  let secondsAsString = padStart(
    Math.trunc(secondsDigit),
    DURATION_FORMAT_PADDING,
    DURATION_FORMAT_CHARACTER
  );

  let stintDuration =
    hoursAsString + ":" + minutesAsString + ":" + secondsAsString;

  return stintDuration;
};

export default computeStintDurationValue;
