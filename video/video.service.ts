import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { Category } from 'src/video/enum';
import { createVideoDto, UpdateVideo } from './dto';
import { IVideo } from './interface';

@Injectable()
export class VideoService {
  private DB: IVideo[];
  constructor() {
    this.DB = [
      {
        id: 1,
        url: 'https://www.youtube.com/watch?v=lTlzDfhPtFA&list=PL2KJL66-K8wOi2lUJd-NLDR6xv59y8jBI&index=89',
        name: 'Love is war?',
        author: 'Kaguya-sama',
        length: '1:30 minutes',
        date: '2020',
        category: Category.OPENING,
      },

      {
        id: 2,
        url: 'https://www.youtube.com/watch?v=FXLY_5xaYFo&list=PL2KJL66-K8wOt90McS-R4YjA0_9RzVI-v&index=2',
        name: 'Legend',
        author: 'Hans Zimmer',
        length: '3:25 minutes',
        date: 'never get old',
        category: Category.GAME,
      },

      {
        id: 3,
        url: 'https://www.youtube.com/watch?v=_DHrxb2k5_w&list=PL2KJL66-K8wOi2lUJd-NLDR6xv59y8jBI&index=32',
        name: 'Naruto AMV',
        author: '???',
        length: '3:03 minutes',
        date: '2020',
        category: Category.AMV,
      },

      {
        id: 4,
        url: 'https://www.youtube.com/watch?v=AWEm4tA2hMc&t=21s',
        name: 'Lost in paradise',
        author: 'JJK ending',
        length: '1:30 minutes',
        date: '2020',
        category: Category.ENDING,
      },
      {
        id: 5,
        url: 'https://www.youtube.com/watch?v=AWEm4tA2hMc&t=21s',
        name: 'You are the best around',
        author: 'Karate Kid',
        length: '3:41 minutes',
        date: '',
        category: Category.SONG,
      },
    ];
  }

  async getAll() {
    return this.DB;
  }
  async getOne(id: number): Promise<IVideo> {
    const isVideo = this.DB.find((v) => v.id == id);
    if (!isVideo) {
      throw new NotFoundException('anime is not defined');
    }
    return isVideo;
  }
  async createAnime(dto: createVideoDto): Promise<IVideo> {
    const isExist = this.DB.find((video) => video.url == dto.url);
    if (isExist) {
      throw new ConflictException('this video already exist');
    }
    dto.id = this.DB.length + 1;
    this.DB.push(dto);
    return dto;
  }
  async change(id: number, dto: UpdateVideo) {
    const video = await this.getOne(id);
    Object.assign(video, dto);
    return video;
  }

  async delete(id: number) {
    const video = await this.getOne(id);
    this.DB.splice(this.DB.indexOf(video), 1);
    return this.DB;
  }
}
