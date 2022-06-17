import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddProductCommand } from '../../../application/ports/primary/command/add-product.command';
import { AddsProductDtoPort } from '../../../application/ports/secondary/dto/adds-product.dto-port';

@Injectable()
export class FirebaseProductService implements AddsProductDtoPort {
  constructor(private _client: AngularFirestore) {}

  add(command: AddProductCommand): Observable<void> {
    return from(this._client.collection('products').add(command)).pipe(
      map(() => void 0)
    );
  }
}
