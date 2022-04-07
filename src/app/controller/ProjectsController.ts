import { NextFunction, Response } from "express";
import APP_CONSTANTS from "../constants";
import validationMiddleware from "../middleware/validationMiddleware";
import { ProjectsService } from "../services/ProjectsService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";
/**
 * Implementation of the EmployeeController route.
 *
 */
class ProjectsController extends AbstractController {
  constructor(
    private projectsService: ProjectsService
  ) {
    super(`${APP_CONSTANTS.apiPrefix}/projects`);
    this.initializeRoutes();
  }
  protected initializeRoutes = (): void => {
      this.router.post(
          `${this.path}`,
         this.createProject
      );
  }
  private createProject = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
      const data = await this.projectsService.createProject(request.body)
      response.send(
          this.fmt.formatResponse(data, Date.now()-request.startTime, "OK")
      );
  }
}
export default ProjectsController