const formatPadStart = (data, count, character) => {
  return String(data).padStart(count, character);
};

export const padStart = formatPadStart;
