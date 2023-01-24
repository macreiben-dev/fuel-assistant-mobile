const PERCENT_SYMBOL = "%";
const NA_SYMBOL = "NA";

const formatPercent = (data) => {
  if (data == undefined || isNaN(data)) {
    return NA_SYMBOL;
  }

  let dataAsPercent = Math.trunc(data * 100);

  return dataAsPercent + PERCENT_SYMBOL;
};

export const formatAsPercent = formatPercent;
