import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AchievementTitle } from "../achievement/AchievementTitle";
import { StationTitle } from "../station/StationTitle";

export const ActivityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="achievements"
          reference="Achievement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AchievementTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="order" source="order" />
        <ReferenceInput source="station.id" reference="Station" label="station">
          <SelectInput optionText={StationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
