import { Student as TStudent } from "../api/student/Student";

export const STUDENT_TITLE_FIELD = "username";

export const StudentTitle = (record: TStudent): string => {
  return record.username?.toString() || String(record.id);
};
