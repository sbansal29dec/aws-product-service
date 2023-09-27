import * as AWS from 'aws-sdk';
import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProductDto } from './dto/createProduct.dto';

@Injectable()
export class ProductsService {
  private logger = new Logger(ProductsService.name);

  async createProduct(createProductDto: CreateProductDto) {
    this.logger.log('comes here');
    const newProduct = {
      id: randomUUID(),
      title: createProductDto.title,
      shortdescription: createProductDto.shortdescription,
    };
    this.logger.log('newProduct id:' + newProduct.id);
    this.logger.log('newProduct title:' + newProduct.title);
    this.logger.log('newProduct shortdescription:' + newProduct.shortdescription);

    try {
      await new AWS.DynamoDB.DocumentClient()
        .put({
          TableName: process.env.PRODUCTS_TABLE_NAME,
          Item: newProduct,
        })
        .promise();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return { ok: true, data: newProduct };
  }
}
