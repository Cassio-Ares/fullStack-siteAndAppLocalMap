import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User{

    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column("varchar")
    firstName: string

    @Column("varchar")
    lastName: string

    @Column('int')
    age: number

    @Column("varchar")
    phone:string

    @Column("varchar")
    email:string

    @Column("varchar")
    password: string

}