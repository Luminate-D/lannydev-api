import { BadRequestException, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  public constructor(@Inject() private readonly notes: NotesService) {}

  @Get()
  public async index(@Query('limit') limit: number = 10, @Query('page') page: number = 1) {
    if(page < 1) throw new BadRequestException({ error: 'Page must be greater than 0' });
    return await this.notes.index(limit, page);
  }

  @Post()
  public async create(@Query('content') content: string) {
    if(!content || content.length < 1 || content.length > 2000) {
      throw new BadRequestException({ error: 'Content must be between 1 and 2000 characters' });
    }

    return await this.notes.create(content);
  }
}
