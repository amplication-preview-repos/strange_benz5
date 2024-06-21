import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StationService } from "./station.service";
import { StationControllerBase } from "./base/station.controller.base";

@swagger.ApiTags("stations")
@common.Controller("stations")
export class StationController extends StationControllerBase {
  constructor(
    protected readonly service: StationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
