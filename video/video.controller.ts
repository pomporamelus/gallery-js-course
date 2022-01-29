import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createVideoDto, UpdateVideo } from './dto';
import { IVideo } from './interface';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private readonly service: VideoService) {}
  @Get('')
  async findAll(): Promise<IVideo[]> {
    return await this.service.getAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.service.getOne(id);
  }
  @Post()
  async createVideo(@Body() dto: createVideoDto): Promise<IVideo> {
    return await this.service.createAnime(dto);
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateVideo) {
    return await this.service.change(id, dto);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.service.delete(id);
  }
}
