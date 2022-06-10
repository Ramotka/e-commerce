import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseTopImagesService } from './firebase-top-images.service';
import { GETS_ONE_TOP_IMAGE_DTO } from '../../../application/ports/secondary/dto/gets-one-top-image.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseTopImagesService,
    { provide: GETS_ONE_TOP_IMAGE_DTO, useExisting: FirebaseTopImagesService },
  ],
  exports: [],
})
export class FirebaseTopImagesServiceModule {}
