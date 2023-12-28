import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { products } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(products)
    private productsRepository: Repository<products>,
  ) {}

  async findAll(): Promise<products[]> {
    return this.productsRepository.find();
  }

async findOne(product_id: number): Promise<products> {
  return this.productsRepository.findOne({ where: { product_id }, select: ['product_id', 'product_name', 'price'] });
}

async create(product: products): Promise<products> {
  return this.productsRepository.save(product);
}

async update(product_id: number, product: products): Promise<products> {
  await this.productsRepository.update({ product_id }, product);
  return this.productsRepository.findOne({ where: { product_id }, select: ['product_id', 'product_name', 'price'] });
}

async remove(product_id: number): Promise<void> {
  const result = await this.productsRepository.delete({ product_id });

  if (result.affected === 0) {
    throw new NotFoundException(`User with ID ${product_id} not found`);
  }
}
}