import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export default class Address {
    @PrimaryGeneratedColumn()
    public id: string;

    @Column()
    public street: string;

    @Column()
    public city: string;

    @Column()
    public country: string;
}