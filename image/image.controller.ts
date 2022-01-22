import { Body, Controller, Get, Param, Put } from '@nestjs/common';
//import {path} from 'path/posix';
import path = require("path/posix")
import { ImageService } from './image.service';
import { IImage } from './interface/image.interface';

@Controller('image')
export class ImageController {
    constructor(private readonly service: ImageService) {}
    @Get('getAll')
    async findAll() {
        return await this.service.findAll()
    }
   @Get(':id') // работает
       async findOne(@Param('id') id : number)  {
       return await this.service.findOne(id)
    }
    @Put(':anime') // надо доработать
    async addAnime(@Body('anime') anime : IImage) {
         await this.service.addAnime(anime)
         await this.service.findAll()
    }
} 
