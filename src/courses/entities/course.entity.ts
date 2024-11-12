import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string
}