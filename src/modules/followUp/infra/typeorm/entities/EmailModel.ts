import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import FollowUpSequence from '@modules/followUp/infra/typeorm/entities/FollowUpSequence';

@Entity('emailModel')
class EmailModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column('integer')
  daysAfter: number;

  @Column()
  followUpSequenceId: string;

  @ManyToOne(
    () => FollowUpSequence,
    followUpSequence => followUpSequence.emailModel,
    { onDelete: 'CASCADE' },
  )
  followUpSequence: FollowUpSequence;

  @Column('text')
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default EmailModel;
