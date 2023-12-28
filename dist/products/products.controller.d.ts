import { ProductsService } from './products.service';
import { products } from './entities/product.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<products[]>;
    findOne(id: string): Promise<products>;
    create(product: products): Promise<products>;
    update(id: string, product: products): Promise<products>;
    remove(id: string): Promise<void>;
}
