import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DiscoverCollectionsComponentModule, FirebaseTopImagesServiceModule, TopImageComponentModule } from '@header';
import { FirebaseProductServiceModule, InMemoryProductsStorageModule, ProductListComponentModule } from '@product';
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
    ProductListComponentModule,
    FirebaseProductServiceModule,
    InMemoryProductsStorageModule
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
