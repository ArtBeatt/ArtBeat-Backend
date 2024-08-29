import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from 'typeorm';
import { User } from './user';

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: 'varchar', length: 50, nullable: true })
    art_image_tag?: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    artist_username?: string;

    @Column({ type: 'date', nullable: true })
    date_of_posting?: Date;

    @Column({ type: 'int', nullable: true })
    views?: number;

    @Column({ type: 'int', nullable: true })
    likes?: number;

    @Column({ type: 'int', nullable: true })
    interactions_amount_10sec_viewings?: number;

    @Column({ type: 'time', nullable: true })
    time_of_posting?: string;

    @Column({ type: 'char', length: 200, nullable: true })
    caption?: string;

    @ManyToOne(() => User, (user) => user.posts)
    postedBy?: User;

    @ManyToMany(() => User, (user) => user.savedPosts)
    savedByUsers!: User[];
}
