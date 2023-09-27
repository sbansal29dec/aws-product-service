/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
export class CreateProductDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    shortdescription: string;
}
