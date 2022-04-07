import {MigrationInterface, QueryRunner} from "typeorm";

export class projectsTable1648879679777 implements MigrationInterface {
    name = 'projectsTable1648879679777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "projects" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "project_id" SERIAL NOT NULL, "project_name" character varying NOT NULL, "description" character varying, "is_active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_b3613537a59b41f5811258edf99" PRIMARY KEY ("project_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "projects"`);
    }

}
