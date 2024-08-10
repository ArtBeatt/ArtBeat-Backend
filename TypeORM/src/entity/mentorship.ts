import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Mentorship {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: 'varchar', length: 50 })
    name?: string;

    @Column({ type: 'varchar', length: 500, nullable: true })
    experience?: string;
}
