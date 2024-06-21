import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ActivityTitle } from "../activity/ActivityTitle";
import { StudentTitle } from "../student/StudentTitle";

export const AchievementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="activity.id"
          reference="Activity"
          label="activity"
        >
          <SelectInput optionText={ActivityTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="points" source="points" />
        <SelectInput
          source="rewardType"
          label="rewardType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="student.id" reference="Student" label="student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};