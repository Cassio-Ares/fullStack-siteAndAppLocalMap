import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class PartherCompany{

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("varchar")
    companyName: string

    @Column("varchar")
    personResponibleFirstName: string

    @Column('varchar')
    personResponibleLastName: string

    @Column("varchar")
    email:string

    @Column("varchar")
    password: string

    @Column("varchar")
    description: string

    @Column("varchar")
    category: string

    @Column("varchar")
    phone: string
   
    @Column("double precision")
    latitude: number

    @Column("double precision")
    longitude: number

}