import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ActivityTitle } from "../activity/ActivityTitle";
import { LevelTitle } from "../level/LevelTitle";

export const StationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="activities"
          reference="Activity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ActivityTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="level.id" reference="Level" label="level">
          <SelectInput optionText={LevelTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="order" source="order" />
      </SimpleForm>
    </Edit>
  );
};
