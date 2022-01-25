import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { CreateAnimeDto} from './dto/create-anime.dto';
import { UAnime } from './dto/updated anime.dto';
import { ImageService } from './image.service';
import { IImage } from './interface/image.interface';


@Controller('image')
export class ImageController {
    constructor(private readonly service: ImageService) {}
    @Get('getAll')
    async findAll() : Promise<IImage[]>{
        return await this.service.getAll()
    }
    @Get(':id') 
    async findOne(@Param('id') id : number) : Promise<IImage>   {
       return await this.service.findOne(id)
    }
    @Post('create') 
    async createAnime(@Body() dto : CreateAnimeDto) : Promise <IImage> {
         return await this.service.createAnime(dto)
    }
    @Put('change')
    async update(@Body() UpdatedAnime: UAnime) {
      return await this.service.update(UpdatedAnime);
    }
    @Delete(':id')
    async remove(@Param('id') id : number) {
        return await this.service.deleteAnime(id)
    }
} 
