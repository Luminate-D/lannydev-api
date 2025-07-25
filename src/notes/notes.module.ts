import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from '../entities/note';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Note ])
  ],
  providers: [ NotesService ],
  controllers: [ NotesController ]
})
export class NotesModule {}
