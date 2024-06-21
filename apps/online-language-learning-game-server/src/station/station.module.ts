import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StationModuleBase } from "./base/station.module.base";
import { StationService } from "./station.service";
import { StationController } from "./station.controller";
import { StationResolver } from "./station.resolver";

@Module({
  imports: [StationModuleBase, forwardRef(() => AuthModule)],
  controllers: [StationController],
  providers: [StationService, StationResolver],
  exports: [StationService],
})
export class StationModule {}
