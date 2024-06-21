import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StationServiceBase } from "./base/station.service.base";

@Injectable()
export class StationService extends StationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
