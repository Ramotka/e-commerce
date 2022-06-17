import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  AdminAddProductComponentModule,
  FirebaseProductServiceModule,
} from '@product';
import { AdminPage } from './admin.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminPage,
      },
    ]),
    AdminAddProductComponentModule,
    FirebaseProductServiceModule,
  ],
  declarations: [AdminPage],
  providers: [],
  exports: [],
})
export class AdminPageModule {}
