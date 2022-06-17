import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [CommonModule, CarouselModule],
  declarations: [CarouselComponent],
  providers: [],
  exports: [CarouselComponent],
})
export class CarouselComponentModule {}
