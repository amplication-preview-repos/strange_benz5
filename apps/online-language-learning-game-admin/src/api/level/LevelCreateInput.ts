import { StationCreateNestedManyWithoutLevelsInput } from "./StationCreateNestedManyWithoutLevelsInput";

export type LevelCreateInput = {
  name?: string | null;
  order?: number | null;
  stations?: StationCreateNestedManyWithoutLevelsInput;
};
