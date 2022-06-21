export class ProductListItemQuery {
  public readonly fullPrice: string;
  constructor(
    public readonly name: string,
    private readonly _price: number,
    private readonly _currency: string
  ) {
    this.fullPrice = `${this._price} ${this._currency}`;
  }
}
