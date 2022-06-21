import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ADDS_PRODUCT_DTO,
  AddsProductDtoPort,
} from '../../../application/ports/secondary/dto/adds-product.dto-port';

@Component({
  selector: 'lib-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminAddProductComponent {
  readonly addProduct: FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    imageUrl: new FormControl(),
    price: new FormControl(),
    currency: new FormControl(),
    collection: new FormControl(),
  });

  constructor(
    @Inject(ADDS_PRODUCT_DTO) private _addsProductDto: AddsProductDtoPort
  ) {}

  onAddProductSubmited(addProduct: FormGroup): void {
    if (addProduct.invalid) {
      return;
    }
    this._addsProductDto
      .add({
        name: addProduct.get('name')?.value,
        description: addProduct.get('description')?.value,
        imageUrl: addProduct.get('imageUrl')?.value,
        price: addProduct.get('price')?.value,
        currency: addProduct.get('currency')?.value,
        collection: addProduct.get('collection')?.value,
      })
      .subscribe();
    addProduct.reset();
  }
}
