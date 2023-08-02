import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsNumber()
  createdBy: number;

  @IsNotEmpty({ message: 'Hãy nhập nội dung muốn bình luận!' })
  @IsString()
  content: string;
}
