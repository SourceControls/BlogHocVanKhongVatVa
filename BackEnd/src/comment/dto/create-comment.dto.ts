import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsNumber()
  createdBy: number;

  @IsNotEmpty({ message: 'Không được để trổng nội dung!' })
  @IsString()
  content: string;
}
