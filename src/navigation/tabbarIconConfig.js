let routeToIcon = (route) => {
  if (route == screenName.StratDetail) {
    return "navigate";
  }
  return "battery-half";
};

let screenName = {
  StratDetail: "StratDetail",
  StintDetail: "StingDetail",
};

export { routeToIcon, screenName };
