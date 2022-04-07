import { getConnection, Repository } from "typeorm";
import { Roles } from "../entities/Roles";


export class RolesRepository extends Repository<Roles> {

    public async createRole(rolesDetails: Roles) {
        const rolesConnection = getConnection().getRepository(Roles);
        const savedDetails = await rolesConnection.save(rolesDetails);
        return savedDetails;
    }
    
    public async updateRoleDetails(roleid: string, roleDetails: any) {
        const roleRepo = getConnection().getRepository(Roles);
        const updateRoleDetails = await roleRepo.update({ roleid: roleid, deletedAt: null }, {
            rolename: roleDetails.name ? roleDetails.name : undefined,
            roledescription: roleDetails.rolesdescription ? roleDetails.roledescription : undefined
        });
        return updateRoleDetails;
    }
    public async softDeleteRoleById(roleid: string) {
        const roleRepo = getConnection().getRepository(Roles);
        return roleRepo.softDelete({
            roleid
        });
    }

}