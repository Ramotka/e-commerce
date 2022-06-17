import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopImageComponent } from './top-image.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponentModule } from '@shared';

@NgModule({
  imports: [CommonModule, CarouselModule, CarouselComponentModule],
  declarations: [TopImageComponent],
  providers: [],
  exports: [TopImageComponent],
})
export class TopImageComponentModule {}
