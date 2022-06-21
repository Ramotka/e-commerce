import { Inject, Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { LoadProductsCommandPort } from '../ports/primary/command/load-products.command-port';
import {
  SETS_STATE_PRODUCT_CONTEXT,
  SetsStateProductContextPort,
} from '../ports/secondary/context/sets-state-product.context-port';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../ports/secondary/dto/gets-all-product.dto-port';
import { LoadProductsCommand } from '../ports/primary/command/load-products.command';

@Injectable()
export class ProductsState implements LoadProductsCommandPort {
  constructor(
    @Inject(SETS_STATE_PRODUCT_CONTEXT)
    private _setsStateProductContext: SetsStateProductContextPort,
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort
  ) {}

  loadProducts(command: LoadProductsCommand): Observable<void> {
    return this._getsAllProductDto
      .getAll()
      .pipe(
        switchMap((products) =>
          this._setsStateProductContext.setState({ all: products })
        )
      );
  }
}
