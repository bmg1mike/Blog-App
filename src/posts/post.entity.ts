import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostTypes } from './enums/postTypes.enum';
import { PostStatus } from './enums/postStatus.enum';
import { MetaOption } from 'src/meta-option/meta-option.entity';
import { User } from 'src/users/user.entity';
import { Tag } from 'src/tag/tag.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 512 })
  title: string;

  @Column({ type: 'enum', enum: PostTypes })
  postType: PostTypes;

  @Column({ type: 'varchar', length: 256, unique: true })
  slug: string;

  @Column({ type: 'enum', enum: PostStatus })
  status: PostStatus;

  @Column({ type: 'text', nullable: true })
  content?: string;

  @Column({ type: 'text', nullable: true })
  schema?: string;

  @Column({ type: 'text', nullable: true })
  featuredImageUrl?: string;

  @Column({ type: 'timestamp', nullable: true })
  publishOn?: Date;

  @Column({ type: 'simple-array', nullable: true })
  @ManyToMany(() => Tag)
  @JoinTable()
  tags?: Tag[];

  @Column({ type: 'json', nullable: true })
  @OneToOne(() => MetaOption, (MetaOption) => MetaOption.post, {
    cascade: true,
    eager: true,
  })
  metaOptions?: MetaOption;

  @ManyToOne(() => User)
  author: User;
}
