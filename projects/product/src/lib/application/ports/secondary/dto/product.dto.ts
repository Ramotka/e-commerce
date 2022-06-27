export interface ProductDTO {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly currency: string;
  readonly imageUrl: string;
  readonly collection: string;
}
