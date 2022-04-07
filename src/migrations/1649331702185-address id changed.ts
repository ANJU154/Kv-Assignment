import {MigrationInterface, QueryRunner} from "typeorm";

export class addressIdChanged1649331702185 implements MigrationInterface {
    name = 'addressIdChanged1649331702185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "add_id"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "add_id" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "add_id"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "add_id" character varying`);
    }

}
