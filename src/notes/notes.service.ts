import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from '../entities/note';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {
  public constructor(
    @InjectRepository(Note) private notes: Repository<Note>
  ) {}

  public async create(content: string): Promise<Note> {
    const note = new Note();

    note.content = content;
    return this.notes.save(note);
  }

  public async index(limit: number = 30, page: number = 1): Promise<Note[]> {
    return this.notes.find({
      take: limit,
      skip: limit * (page - 1),
      order: {
        createdAt: 'DESC',
      },
    });
  }
}
