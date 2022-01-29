import { Contains, IsEnum, IsOptional, Length } from 'class-validator';
import { Category } from 'src/video/enum/category.enum';

export class createVideoDto {
  id?: number;
  @Contains('https://')
  url: string;

  @Length(2, 30)
  name: string;
  @Length(2, 30)
  author: string;
  @IsOptional()
  length: string;
  @IsOptional()
  date: string;
  @IsEnum(Category)
  category: Category;
}
