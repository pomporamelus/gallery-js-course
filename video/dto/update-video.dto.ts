import { Contains, IsEnum, IsOptional, Length } from 'class-validator';
import { Category } from 'src/video/enum/category.enum';

export class UpdateVideo {
  @IsOptional()
  @Contains('https://')
  url: string;
  @IsOptional()
  @Length(2, 30)
  author: string;
  @IsOptional()
  length: string;
  @IsOptional()
  @Length(2, 25)
  date: string;
  @IsEnum(Category)
  category: Category;
}
