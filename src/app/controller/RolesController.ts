import { NextFunction, Response } from "express";
import APP_CONSTANTS from "../constants";
import validationMiddleware from "../middleware/validationMiddleware";
import { RolesService } from "../services/RolesService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";
/**
 * Implementation of the EmployeeController route.
 *
 */
class RolesController extends AbstractController {
  constructor(
    private RolesService: RolesService
  ) {
    super(`${APP_CONSTANTS.apiPrefix}/roles`);
    this.initializeRoutes();
  }
  protected initializeRoutes = (): void => {
      this.router.post(
          `${this.path}`,
         this.createRole
      );
  }
  private createRole = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
      const data = await this.RolesService.createRoles(request.body)
      response.send(
          this.fmt.formatResponse(data, Date.now()-request.startTime, "OK")
      );
  }    
    private updateRole = async (
        request: RequestWithUser,
        response: Response,
        next: NextFunction
      ) => {
          const data = await this.RolesService.updateRole(request.params.roleid, request.body);
          response.status(201).send(
            this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
          );
      }

     private deleteRole= async (
         request: RequestWithUser,
         response: Response,
         next: NextFunction
       ) => {
         const data = await this.RolesService.deleteRole(request.params.employeeId);
       response.status(201).send(
           this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
         );
      }
  }
export default RolesController
