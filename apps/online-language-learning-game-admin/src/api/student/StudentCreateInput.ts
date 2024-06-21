import { AchievementCreateNestedManyWithoutStudentsInput } from "./AchievementCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  achievements?: AchievementCreateNestedManyWithoutStudentsInput;
  email?: string | null;
  username?: string | null;
};
