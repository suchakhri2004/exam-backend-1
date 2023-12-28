import { Repository } from 'typeorm';
import { products } from './entities/product.entity';
export declare class ProductsService {
    private productsRepository;
    constructor(productsRepository: Repository<products>);
    findAll(): Promise<products[]>;
    findOne(product_id: number): Promise<products>;
    create(product: products): Promise<products>;
    update(product_id: number, product: products): Promise<products>;
    remove(product_id: number): Promise<void>;
}
