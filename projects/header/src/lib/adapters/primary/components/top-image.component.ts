import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TopImageDTO } from '../../../application/ports/secondary/dto/top-image.dto';
import {
  GetsAllTopImageDtoPort,
  GETS_ALL_TOP_IMAGE_DTO,
} from '../../../application/ports/secondary/dto/gets-all-top-image.dto-port';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'lib-top-image',
  templateUrl: './top-image.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopImageComponent {
  images$: Observable<TopImageDTO[]> = this._getsAllTopImageDto.getAll();

  constructor(
    @Inject(GETS_ALL_TOP_IMAGE_DTO)
    private _getsAllTopImageDto: GetsAllTopImageDtoPort
  ) {}

  // Gdzie najlepiej to przeniesc?
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      760: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    nav: false,
  };
}
