import { ActivityCreateNestedManyWithoutStationsInput } from "./ActivityCreateNestedManyWithoutStationsInput";
import { LevelWhereUniqueInput } from "../level/LevelWhereUniqueInput";

export type StationCreateInput = {
  activities?: ActivityCreateNestedManyWithoutStationsInput;
  level?: LevelWhereUniqueInput | null;
  name?: string | null;
  order?: number | null;
};
