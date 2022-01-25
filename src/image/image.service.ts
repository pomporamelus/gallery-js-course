import {ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UAnime } from './dto/updated anime.dto';
import { IImage } from './interface/image.interface';

@Injectable()
export class ImageService {
    private DB: IImage[]
    constructor() {
        this.DB = [
            {id: 1, name: 'Kaguya-sama', url: 'https://static.hdrezka.ac/i/2020/12/26/o02b9dc620c59wv10n65q.jpg', description: ''},
            {id: 2,name: 'Vinland Saga', url: 'https://animego.org/upload/anime/images/5d8f86db39318930257463.jpg', description: ''},
            {id: 3,name: 'JJK', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnCtlxxIjLL6O5brhlrCK7vOx4HxRps7f7g&usqp=CAU', description: ''},
        ]
    }
    async getAll(): Promise<IImage[]>   {
    return this.DB
    }
    async findOne(neededId: number): Promise<IImage> {
        const anime =  this.DB.find((anime : IImage) => anime.id == neededId )
        if(!anime) {
             throw new NotFoundException('anime is not defined')
            //  throw new HttpException(
            //      'Anime is not defined' ,
            //       HttpStatus.NOT_FOUND
            //       )
           }
          return anime
       }

    async createAnime(dto : CreateAnimeDto) : Promise<IImage> {
    const exist = this.DB.find(anime => anime.url === dto.url)
    if(exist) {
        throw new ConflictException('this anime already exist')
    }
    dto.id = this.DB.length + 1
    this.DB.push(dto)
    return dto
    }

    async update(updatedAnime : UAnime)   {
        const update = this.DB.find((anime : IImage) => anime.id == updatedAnime.id) 
        if (update) {
            this.DB.splice(updatedAnime.id -1, 1, updatedAnime)
            return this.DB
        }
        else { throw new NotFoundException('we can not update anime, anime is not defined')}
    }

    async deleteAnime(id : number) {
        const deleted = this.DB.find(anime => anime.id == id)
       if (!deleted) {
        throw new NotFoundException('can not delete anime, no such id exists')
       }
       this.DB.splice(id-1, 1)
       return this.getAll()
    }
}
