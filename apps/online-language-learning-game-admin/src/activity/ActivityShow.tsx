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

import { ACTIVITY_TITLE_FIELD } from "./ActivityTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";
import { STATION_TITLE_FIELD } from "../station/StationTitle";

export const ActivityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="order" source="order" />
        <ReferenceField label="station" source="station.id" reference="Station">
          <TextField source={STATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Achievement"
          target="activityId"
          label="Achievements"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="activity"
              source="activity.id"
              reference="Activity"
            >
              <TextField source={ACTIVITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="points" source="points" />
            <TextField label="rewardType" source="rewardType" />
            <ReferenceField
              label="student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
