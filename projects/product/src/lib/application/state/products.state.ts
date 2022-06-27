import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { LoadProductsCommandPort } from '../ports/primary/command/load-products.command-port';
import { GetsCurrentProductListQueryPort } from '../ports/primary/query/gets-current-product-list.query-port';
import {
  SETS_STATE_PRODUCT_CONTEXT,
  SetsStateProductContextPort,
} from '../ports/secondary/context/sets-state-product.context-port';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../ports/secondary/dto/gets-all-product.dto-port';
import {
  SELECTS_PRODUCT_CONTEXT,
  SelectsProductContextPort,
} from '../ports/secondary/context/selects-product.context-port';
import { LoadProductsCommand } from '../ports/primary/command/load-products.command';
import { ProductListQuery } from '../ports/primary/query/product-list.query';
import { ProductContext } from '../ports/secondary/context/product.context';
import { mapFromProductContext } from './product-list-query.mapper';

@Injectable()
export class ProductsState
  implements LoadProductsCommandPort, GetsCurrentProductListQueryPort
{
  constructor(
    @Inject(SETS_STATE_PRODUCT_CONTEXT)
    private _setsStateProductContext: SetsStateProductContextPort,
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort,
    @Inject(SELECTS_PRODUCT_CONTEXT)
    private _selectsProductContext: SelectsProductContextPort
  ) {}

  loadProducts(command: LoadProductsCommand): Observable<void> {
    return this._getsAllProductDto.getAll().pipe(
      take(1),
      switchMap((products) =>
        this._setsStateProductContext.setState({ all: products })
      )
    );
  }

  getCurrentProductListQuery(): Observable<ProductListQuery> {
    return this._selectsProductContext
      .select()
      .pipe(map((ctx) => mapFromProductContext(ctx)));
  }
}
