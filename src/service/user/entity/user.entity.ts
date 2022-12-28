import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User{
    @PrimaryGeneratedColumn('increment') id: number;
    @Column() username: string;
    @Column() email: string;
    @Column() password: string;
}