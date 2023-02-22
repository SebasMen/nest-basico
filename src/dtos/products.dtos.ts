export class CreateProductDto {
  readonly name: string;
  readonly price: number;
  readonly stock: number;
  readonly image: string;
  readonly description: string;
}

export class UpdateProductDto {
  readonly name?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
  readonly description?: string;
}
