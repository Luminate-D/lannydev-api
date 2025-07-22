import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DateTime } from 'luxon';
import { LuxonDatetimeTransformer } from './transformers/luxon-datetime.transformer';

@Entity()
export class Note {
  @PrimaryGeneratedColumn() id: number;

  @Column() content: string;
  @Column({
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
    transformer: LuxonDatetimeTransformer
  }) createdAt: DateTime = DateTime.now();

  @Column({
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    transformer: LuxonDatetimeTransformer
  }) updatedAt: DateTime = DateTime.now();
}