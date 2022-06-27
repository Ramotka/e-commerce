import { ProductListQuery } from '../ports/primary/query/product-list.query';
import { ProductContext } from '../ports/secondary/context/product.context';

export const mapFromProductContext = (
  context: Partial<ProductContext>
): ProductListQuery =>
  new ProductListQuery(
    (context.all || []).map(
      (data) => `${data.name} for ${data.price} ${data.currency}`
    )
  );
