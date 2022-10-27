
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('student')
export class Student
{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column({type:String})
    firstName:string;
    @Column({type:String})
    lastName:string;
    @Column({type:String})
    city:string;
}