import { CollectionsQuery } from './collections.query';

export class DiscoverCollectionsQuery {
  public readonly items: CollectionsQuery[];
  constructor(data: { collection: string }[]) {
    this.items = data.map((items) => new CollectionsQuery(items.collection));
  }
}
