import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import Address from "./Address"

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    public id: string

    @Column()
    public name: string

    @Column()
    public email: string

    @Column()
    public password: string

    // one-to-one decorator takes an argument which is a function returning
    // class of the entity with which we make our relationship with.
    @OneToOne(() => Address)
    @JoinColumn()
    public address: Address
}