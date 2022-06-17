import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsProductDtoPort } from '../../../application/ports/secondary/dto/adds-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';

@Injectable()
export class FirebaseProductService implements AddsProductDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(product: Partial<ProductDTO>): Observable<void> {
    return from(this._client.collection('products').add(product)).pipe(map(() => void 0));
  }
}
