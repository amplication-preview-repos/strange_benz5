import { StationUpdateManyWithoutLevelsInput } from "./StationUpdateManyWithoutLevelsInput";

export type LevelUpdateInput = {
  name?: string | null;
  order?: number | null;
  stations?: StationUpdateManyWithoutLevelsInput;
};
