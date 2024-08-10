import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Posts } from './post';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ unique: true })
    email?: string;

    @Column()
    password?: string;

    @Column({ type: 'boolean', default: false })
    verificationStatus?: boolean;

    @Column({ type: 'varchar', length: 50, nullable: true })
    verificationCode?: string;

    @Column()
    role?: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt?: Date;

    @OneToMany(() => Posts, (post) => post.postedBy)
    posts?: Posts[]

    @ManyToMany(() => Posts, (post) => post.savedByUsers)
    @JoinTable()
    savedPosts!: Posts[];    
}
