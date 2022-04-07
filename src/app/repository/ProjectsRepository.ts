import { getConnection, Repository } from "typeorm";
import { Projects } from "../entities/Projects";
export class ProjectsRepository extends Repository<Projects> {
    public async createProject(projectDetails: Projects) {
        const projectsConnection = getConnection().getRepository(Projects);
        const savedDetails = await projectsConnection.save(projectDetails);
        return savedDetails;
    }
}
