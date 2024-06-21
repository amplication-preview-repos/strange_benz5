/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ActivityWhereUniqueInput } from "../../activity/base/ActivityWhereUniqueInput";
import { ValidateNested, IsOptional, IsInt, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumAchievementRewardType } from "./EnumAchievementRewardType";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";

@InputType()
class AchievementUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ActivityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ActivityWhereUniqueInput)
  @IsOptional()
  @Field(() => ActivityWhereUniqueInput, {
    nullable: true,
  })
  activity?: ActivityWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  points?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumAchievementRewardType,
  })
  @IsEnum(EnumAchievementRewardType)
  @IsOptional()
  @Field(() => EnumAchievementRewardType, {
    nullable: true,
  })
  rewardType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => StudentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StudentWhereUniqueInput)
  @IsOptional()
  @Field(() => StudentWhereUniqueInput, {
    nullable: true,
  })
  student?: StudentWhereUniqueInput | null;
}

export { AchievementUpdateInput as AchievementUpdateInput };