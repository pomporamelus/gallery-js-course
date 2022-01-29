import { Category } from 'src/video/enum/category.enum';

export interface IVideo {
  id?: number;
  url: string;
  name: string;
  author: string;
  length: string;
  date: string;
  category: Category;
}
