import { ActivityUpdateManyWithoutStationsInput } from "./ActivityUpdateManyWithoutStationsInput";
import { LevelWhereUniqueInput } from "../level/LevelWhereUniqueInput";

export type StationUpdateInput = {
  activities?: ActivityUpdateManyWithoutStationsInput;
  level?: LevelWhereUniqueInput | null;
  name?: string | null;
  order?: number | null;
};
