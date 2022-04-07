import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
@Entity("projects")
export class Projects extends AbstractEntity {
    @PrimaryGeneratedColumn("increment")
    public project_id: string;
    @Column()
    public project_name: string;
    @Column({ nullable: true })
    public description: string;
    @Column({ default: true })
    public isActive: boolean;
}