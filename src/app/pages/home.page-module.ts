import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  DiscoverCollectionsComponentModule,
  FirebaseTopImagesServiceModule,
  TopImageComponentModule,
} from '@header';
import {
  FirebaseProductServiceModule,
  InMemoryProductsStorageModule,
  LoadProductsResolver,
  LoadProductsResolverModule,
  ProductListComponentModule,
  ProductsStateModule,
} from '@product';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        resolve: [LoadProductsResolver],
        component: HomePage,
      },
    ]),
    TopImageComponentModule,
    FirebaseTopImagesServiceModule,
    DiscoverCollectionsComponentModule,
    ProductListComponentModule,
    FirebaseProductServiceModule,
    InMemoryProductsStorageModule,
    ProductsStateModule,
    LoadProductsResolverModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
