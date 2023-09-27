import { Controller, Post, Body, Res, HttpStatus, Logger } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/createProduct.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  private logger = new Logger(ProductsController.name);

  @Post('/createProduct')
  async createProduct(@Body() createProductDto: CreateProductDto, @Res() res: any) {
    this.logger.log('createProductDto:' + createProductDto);
    try {
      const newProduct: any = await this.productsService.createProduct(createProductDto);

      this.logger.log('newProduct response:' + newProduct);
      if (newProduct.ok) {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          data: newProduct.data,
        });
      } else {
        return res.status(HttpStatus.BAD_REQUEST).json({
          ok: false,
          message: 'Error Trying to Create Product',
        });
      }
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error Trying to reach DB',
        errors: error,
      });
    }
  }
}
