let routeToIcon = (route) => {
  if (route == screenName.StratDetail) {
    return "brain";
  }
  return "battery-half";
};

let screenName = {
  StratDetail: "StratDetail",
  StintDetail: "StingDetail",
};

export { routeToIcon, screenName };
