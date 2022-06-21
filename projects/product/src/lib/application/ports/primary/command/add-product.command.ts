export class AddProductCommand {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly price: number,
    readonly currency: number,
    readonly imageUrl: string,
    readonly collection: string
  ) {}
}
