import { Controller, Get, Post, Body, Patch,Put, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { products } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Promise<products[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<products> {
    return this.productsService.findOne(+id);
  }

  @Post()
  create(@Body() product: products): Promise<products> {
    return this.productsService.create(product);
  } 

  @Put(':id')
  update(@Param('id') id: string, @Body() product: products): Promise<products> {
    return this.productsService.update(+id, product);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.productsService.remove(+id);
  }

}
