import { AchievementUpdateManyWithoutStudentsInput } from "./AchievementUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  achievements?: AchievementUpdateManyWithoutStudentsInput;
  email?: string | null;
  username?: string | null;
};
