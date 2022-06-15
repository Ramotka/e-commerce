import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FirebaseTopImagesServiceModule,
  TopImageComponentModule,
  DiscoverCollectionsComponentModule,
} from '@header';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    TopImageComponentModule,
    FirebaseTopImagesServiceModule,
    DiscoverCollectionsComponentModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
