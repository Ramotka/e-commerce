import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetsAllTopImageDtoPort } from '../../../application/ports/secondary/dto/gets-all-top-image.dto-port';
import { GetsOneTopImageDtoPort } from '../../../application/ports/secondary/dto/gets-one-top-image.dto-port';
import { TopImageDTO } from '../../../application/ports/secondary/dto/top-image.dto';

@Injectable()
export class FirebaseTopImagesService
  implements GetsOneTopImageDtoPort, GetsAllTopImageDtoPort
{
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

  getAll(): Observable<TopImageDTO[]> {
    return this._client
      .collection<TopImageDTO>('top-image')
      .valueChanges({ idField: 'id' });
  }
}
