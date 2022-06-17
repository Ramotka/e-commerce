import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  GetsAllTopImageDtoPort,
  GETS_ALL_TOP_IMAGE_DTO,
} from '../../../application/ports/secondary/dto/gets-all-top-image.dto-port';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HeaderQuery } from '../../../application/ports/primary/query/header.query';

@Component({
  selector: 'lib-top-image',
  templateUrl: './top-image.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopImageComponent {
  topImageQuery$: Observable<HeaderQuery> = this._getsAllTopImageDto
    .getAll()
    .pipe(map((topImageDtos) => new HeaderQuery(topImageDtos)));

  constructor(
    @Inject(GETS_ALL_TOP_IMAGE_DTO)
    private _getsAllTopImageDto: GetsAllTopImageDtoPort
  ) {}

  // Gdzie najlepiej to przeniesc? Prezentacyjny komponent
}
