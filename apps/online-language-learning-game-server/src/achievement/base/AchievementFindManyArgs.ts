/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AchievementWhereInput } from "./AchievementWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AchievementOrderByInput } from "./AchievementOrderByInput";

@ArgsType()
class AchievementFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AchievementWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AchievementWhereInput, { nullable: true })
  @Type(() => AchievementWhereInput)
  where?: AchievementWhereInput;

  @ApiProperty({
    required: false,
    type: [AchievementOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AchievementOrderByInput], { nullable: true })
  @Type(() => AchievementOrderByInput)
  orderBy?: Array<AchievementOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AchievementFindManyArgs as AchievementFindManyArgs };
