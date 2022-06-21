import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsProductDtoPort } from '../../../application/ports/secondary/dto/adds-product.dto-port';
import { GetsAllProductDtoPort } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { AddProductCommand } from '../../../application/ports/primary/command/add-product.command';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';

@Injectable()
export class FirebaseProductService implements AddsProductDtoPort, GetsAllProductDtoPort {
  constructor(private _client: AngularFirestore) {}

  add(command: AddProductCommand): Observable<void> {
    return from(this._client.collection('products').add(command)).pipe(
      map(() => void 0)
    );
  }

  getAll(): Observable<ProductDTO[]> {
    return this._client.collection<ProductDTO>('products').valueChanges(({idField: 'id'}));
  }
}
