import { Injectable } from '@nestjs/common';
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
    async findAll() {
    return this.DB
    }
    async findOne(neededId: number) {
         return this.DB.find((anime) => {if (anime.id == this.DB[neededId].id ) {return this.DB[neededId]} } )
    }
    async addAnime(anime : IImage) {
     return this.DB.push(anime)
    }
}
