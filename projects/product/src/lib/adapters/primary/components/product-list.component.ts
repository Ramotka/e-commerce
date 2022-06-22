import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductContext } from '../../../application/ports/secondary/context/product.context';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import {
  SELECTS_PRODUCT_CONTEXT,
  SelectsProductContextPort,
} from '../../../application/ports/secondary/context/selects-product.context-port';
import { ProductListQuery } from '../../../application/ports/primary/query/product-list.query';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';

@Component({
  selector: 'lib-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  productsInStorage$: Observable<Partial<ProductContext>> =
    this._selectsProductContext.select();
  productList$: Observable<ProductDTO[]> = this._getsAllProductDto.getAll();

  constructor(
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort,
    @Inject(SELECTS_PRODUCT_CONTEXT)
    private _selectsProductContext: SelectsProductContextPort
  ) {}
}
