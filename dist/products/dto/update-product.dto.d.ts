import { CreateProductDto } from './create-product.dto';
declare const UpdateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    name?: string;
    description?: string;
    price?: number;
    sku?: string;
    quantity?: number;
    categoryId?: number;
    brandId?: number;
}
export {};
