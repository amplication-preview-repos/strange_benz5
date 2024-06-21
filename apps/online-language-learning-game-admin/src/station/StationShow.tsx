import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { STATION_TITLE_FIELD } from "./StationTitle";
import { LEVEL_TITLE_FIELD } from "../level/LevelTitle";

export const StationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="level" source="level.id" reference="Level">
          <TextField source={LEVEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="name" source="name" />
        <TextField label="order" source="order" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Activity"
          target="stationId"
          label="Activities"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="order" source="order" />
            <ReferenceField
              label="station"
              source="station.id"
              reference="Station"
            >
              <TextField source={STATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
