import { plainToClass } from "class-transformer";
import { Roles } from "../entities/Roles";
import { RolesRepository } from "../repository/RolesRepository";
export class RolesService {
    constructor(
        private RolesRepository: RolesRepository
    ) {}
    public async createRoles(roleInput: any) {
        const roleData = plainToClass(Roles, {
            "rolename": roleInput.name,
            "roledescription": "Sample role"
        });
        const savedDetails = await this.RolesRepository.createRole(roleData);
        return savedDetails;
    }
    public async updateRole(roleid: string, rolesDetails: any) {
        // Approach 1
        const updatedRole = await this.RolesRepository.updateRoleDetails(roleid, rolesDetails);
        return updatedRole;

    }
    public async deleteRole(roleid: string) {
        return this.RolesRepository.softDeleteRoleById(roleid);
    }
}