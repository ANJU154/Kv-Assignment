import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
@Entity("roles")
export class Roles extends AbstractEntity {
    @PrimaryGeneratedColumn("increment")
    public roleid: string;
    @Column()
    public rolename: string;
    @Column({ nullable: true })
    public roledescription: string;
}