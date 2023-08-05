let routeToIcon = (route) => {
  if (route == screenName.StratDetail) {
    return "navigate";
  }
  return "battery-half";
};

let screenName = {
  StratDetail: "Strat Detail",
  StintDetail: "Stint Detail",
};

export { routeToIcon, screenName };
