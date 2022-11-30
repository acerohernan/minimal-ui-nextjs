export interface CreateProductForm {
  id: string;
  category_id: string | null;
  name: string;
  sku: string;
  description: string;
  price: string;
  offer_price: string;
  stock: number;
  variants: Array<ProductVariantDTO>;
}

export interface ProductVariantDTO {
  name: string;
  mandatory: boolean;
  options_to_choose: number;
  options: Array<VarianOptionDTO>;
}

export interface VarianOptionDTO {
  name: string;
  price: string;
}

export interface UpdateProductForm
  extends Partial<Omit<CreateProductForm, "id">> {}
