import { TopImageQuery } from './top-image.query';

export class HeaderQuery {
  public readonly images: TopImageQuery[];
  constructor(
    data: {
      imageUrl: string;
      alt: string;
      collection: string;
      showImage: boolean;
    }[]
  ) {
    this.images = data
      .map(
        (topImageDto) =>
          new TopImageQuery(
            topImageDto.imageUrl,
            topImageDto.alt,
            topImageDto.collection,
            topImageDto.showImage
          )
      )
      .filter((topImages) => topImages.showImage === true);
  }
}
