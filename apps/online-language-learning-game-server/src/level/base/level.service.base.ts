/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Level as PrismaLevel,
  Station as PrismaStation,
} from "@prisma/client";

export class LevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LevelCountArgs, "select">): Promise<number> {
    return this.prisma.level.count(args);
  }

  async levels(args: Prisma.LevelFindManyArgs): Promise<PrismaLevel[]> {
    return this.prisma.level.findMany(args);
  }
  async level(args: Prisma.LevelFindUniqueArgs): Promise<PrismaLevel | null> {
    return this.prisma.level.findUnique(args);
  }
  async createLevel(args: Prisma.LevelCreateArgs): Promise<PrismaLevel> {
    return this.prisma.level.create(args);
  }
  async updateLevel(args: Prisma.LevelUpdateArgs): Promise<PrismaLevel> {
    return this.prisma.level.update(args);
  }
  async deleteLevel(args: Prisma.LevelDeleteArgs): Promise<PrismaLevel> {
    return this.prisma.level.delete(args);
  }

  async findStations(
    parentId: string,
    args: Prisma.StationFindManyArgs
  ): Promise<PrismaStation[]> {
    return this.prisma.level
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .stations(args);
  }
  async GetAllLevels(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}