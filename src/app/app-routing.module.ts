import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AdminPageModule } from './pages/admin.page-module';

const routes: Routes = [{ 
        path: '', 
        loadChildren: () => HomePageModule
      },
  { 
        path: 'admin', 
        loadChildren: () => AdminPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
