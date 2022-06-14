export class TopImageQuery {
  constructor(
    public readonly image: string,
    public readonly alt: string,
    public readonly text: string
  ) {}
}

// public readonly image: string;
// public readonly alt: string;
// public readonly text: string;
// constructor(
//   private readonly _imageUrl: string,
//   private readonly _alt: string,
//   private readonly _collection: string
// ) {
//   this.image = `${this._imageUrl}`;
//   this.alt = `${this._alt}`;
//   this.text = `${this._collection}`;
// }
