import { plainToClass } from "class-transformer";
import { Projects } from "../entities/Projects";
import { ProjectsRepository } from "../repository/ProjectsRepository";
export class ProjectsService {
    constructor(
        private projectRepository: ProjectsRepository
    ) {}
    public async createProject(projectInput: any) {
        const projectData = plainToClass(Projects, {
            "project_name": projectInput.name,
            "description": "Sample project"
        });
        const savedDetails = await this.projectRepository.createProject(projectData);
        return savedDetails;
    }
}