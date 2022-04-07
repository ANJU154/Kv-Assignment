import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { Employee } from "./Employee";

@Entity("address")
export class Address extends AbstractEntity {
    @PrimaryGeneratedColumn("increment")
    public id: string;

    @Column({ nullable: false })
    public line1: string;

    @Column({ nullable: true})
    public line2: string;

}