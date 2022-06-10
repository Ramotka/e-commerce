import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetsOneTopImageDtoPort } from '../../../application/ports/secondary/dto/gets-one-top-image.dto-port';
import { TopImageDTO } from '../../../application/ports/secondary/dto/top-image.dto';

@Injectable()
export class FirebaseTopImagesService implements GetsOneTopImageDtoPort {
  constructor(private _client: AngularFirestore) {}

  getOne(id: string): Observable<TopImageDTO> {
    return this._client
      .doc<TopImageDTO>('top-image/' + id)
      .valueChanges({ idField: 'id' })
      .pipe(
        switchMap((item) =>
          item
            ? of(item)
            : throwError(new Error('Item does not exist in firebase'))
        )
      );
  }
}
