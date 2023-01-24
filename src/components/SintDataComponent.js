import React from "react";
import { useSelector } from "react-redux";
import { DataTable } from "react-native-paper";

import { selectConsumptionForStint } from "../stores/stintdetails/selectors/lapConsumptionSelector";

import { formatAsPercent } from "./formating/formating";

export const DisplayStintDataComponent = () => {
  const selector = useSelector(selectConsumptionForStint);

  let dataItems = selector.map((element) => {
    return (
      <DataTable.Row key={element.stintPercent}>
        <DataTable.Title>
          {formatAsPercent(element.stintPercent)}
        </DataTable.Title>
        <DataTable.Cell numeric>{element.stintDuration}</DataTable.Cell>
        <DataTable.Cell numeric>{element.previsionalLapCount}</DataTable.Cell>
        <DataTable.Cell numeric>{element.consumption}</DataTable.Cell>
      </DataTable.Row>
    );
  });

  return dataItems;
};
