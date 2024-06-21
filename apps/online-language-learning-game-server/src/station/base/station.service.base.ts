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
  Station as PrismaStation,
  Activity as PrismaActivity,
  Level as PrismaLevel,
} from "@prisma/client";

export class StationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.StationCountArgs, "select">): Promise<number> {
    return this.prisma.station.count(args);
  }

  async stations(args: Prisma.StationFindManyArgs): Promise<PrismaStation[]> {
    return this.prisma.station.findMany(args);
  }
  async station(
    args: Prisma.StationFindUniqueArgs
  ): Promise<PrismaStation | null> {
    return this.prisma.station.findUnique(args);
  }
  async createStation(args: Prisma.StationCreateArgs): Promise<PrismaStation> {
    return this.prisma.station.create(args);
  }
  async updateStation(args: Prisma.StationUpdateArgs): Promise<PrismaStation> {
    return this.prisma.station.update(args);
  }
  async deleteStation(args: Prisma.StationDeleteArgs): Promise<PrismaStation> {
    return this.prisma.station.delete(args);
  }

  async findActivities(
    parentId: string,
    args: Prisma.ActivityFindManyArgs
  ): Promise<PrismaActivity[]> {
    return this.prisma.station
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .activities(args);
  }

  async getLevel(parentId: string): Promise<PrismaLevel | null> {
    return this.prisma.station
      .findUnique({
        where: { id: parentId },
      })
      .level();
  }
  async GetAllStations(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
