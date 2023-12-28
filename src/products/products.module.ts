import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { products } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([products])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
