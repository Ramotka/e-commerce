import { Inject, Injectable } from '@angular/core';
import {
  SETS_STATE_PRODUCT_CONTEXT,
  SetsStateProductContextPort,
} from '../ports/secondary/context/sets-state-product.context-port';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../ports/secondary/dto/gets-all-product.dto-port';

@Injectable()
export class ProductsState {
  constructor(
    @Inject(SETS_STATE_PRODUCT_CONTEXT)
    private _setsStateProductContext: SetsStateProductContextPort,
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort
  ) {}
}
