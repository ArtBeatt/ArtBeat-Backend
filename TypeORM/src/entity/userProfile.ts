import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserProfiles {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: 'varchar', length: 50 })
    name?: string;
}
