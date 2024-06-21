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
import { AchievementUpdateManyWithoutActivitiesInput } from "./AchievementUpdateManyWithoutActivitiesInput";
import { ValidateNested, IsOptional, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { StationWhereUniqueInput } from "../../station/base/StationWhereUniqueInput";

@InputType()
class ActivityUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AchievementUpdateManyWithoutActivitiesInput,
  })
  @ValidateNested()
  @Type(() => AchievementUpdateManyWithoutActivitiesInput)
  @IsOptional()
  @Field(() => AchievementUpdateManyWithoutActivitiesInput, {
    nullable: true,
  })
  achievements?: AchievementUpdateManyWithoutActivitiesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  order?: number | null;

  @ApiProperty({
    required: false,
    type: () => StationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StationWhereUniqueInput)
  @IsOptional()
  @Field(() => StationWhereUniqueInput, {
    nullable: true,
  })
  station?: StationWhereUniqueInput | null;
}

export { ActivityUpdateInput as ActivityUpdateInput };
