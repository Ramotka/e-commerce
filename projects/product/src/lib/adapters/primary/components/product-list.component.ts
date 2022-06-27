import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductContext } from '../../../application/ports/secondary/context/product.context';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import { ProductListQuery } from '../../../application/ports/primary/query/product-list.query';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import {
  SELECTS_PRODUCT_CONTEXT,
  SelectsProductContextPort,
} from '../../../application/ports/secondary/context/selects-product.context-port';
import {
  GETS_CURRENT_PRODUCT_LIST_QUERY,
  GetsCurrentProductListQueryPort,
} from '../../../application/ports/primary/query/gets-current-product-list.query-port';
import {
  LOAD_PRODUCTS_COMMAND,
  LoadProductsCommandPort,
} from '../../../application/ports/primary/command/load-products.command-port';
import { LoadProductsCommand } from '../../../application/ports/primary/command/load-products.command';

@Component({
  selector: 'lib-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  productList$: Observable<ProductDTO[]> = this._getsAllProductDto.getAll();
  cos$: Observable<ProductListQuery> =
    this._getsCurrentProductListQuery.getCurrentProductListQuery();

  constructor(
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort,
    @Inject(SELECTS_PRODUCT_CONTEXT)
    private _selectsProductContext: SelectsProductContextPort,
    @Inject(GETS_CURRENT_PRODUCT_LIST_QUERY)
    private _getsCurrentProductListQuery: GetsCurrentProductListQueryPort,
    @Inject(LOAD_PRODUCTS_COMMAND)
    private _loadProductsCommand: LoadProductsCommandPort
  ) {}
}
