export interface ProductModel {
  id: number;
  name: string;
  price: number;
  description?: string;
}

export type ProductRequiredProps = Pick<ProductModel, 'id' | 'name' | 'price'>;

export function calculateTotalPrice(products: ProductModel[]) {
  return products.reduce((total, product) => {
    return total + product.price;
  }, 0);
}
