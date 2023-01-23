import React from "react";
import { useSelector } from "react-redux";
import { DataTable } from "react-native-paper";

import { selectConsumptionForStint } from "../stores/stintdetails/selectors/lapConsumptionSelector";

export const DisplayStintDataComponent = () => {
  const selector = useSelector(selectConsumptionForStint);

  let dataItems = selector.map((element) => {
    return (
      <DataTable.Row>
        <DataTable.Title>{element.stintPercent}</DataTable.Title>
        <DataTable.Cell numeric>NA</DataTable.Cell>
        <DataTable.Cell numeric>NA</DataTable.Cell>
        <DataTable.Cell numeric>{element.consumption}</DataTable.Cell>
      </DataTable.Row>
    );
  });

  return dataItems;
};
