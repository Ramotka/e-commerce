import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProductCommand } from '../../primary/command/add-product.command';

export const ADDS_PRODUCT_DTO = new InjectionToken<AddsProductDtoPort>(
  'ADDS_PRODUCT_DTO'
);

export interface AddsProductDtoPort {
  add(command: AddProductCommand): Observable<void>;
}
