import { Post } from 'src/posts/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({
    type: 'varchar',
    length: 96,
  })
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'varchar',
    length: 96,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 96,
  })
  password: string;

  @OneToMany(() => Post, (post) => post.author, { cascade: true })
  posts: Post[];
}
