import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { TopImageDTO } from '../../../application/ports/secondary/dto/top-image.dto';
import { GETS_ALL_TOP_IMAGE_DTO, GetsAllTopImageDtoPort } from '../../../application/ports/secondary/dto/gets-all-top-image.dto-port';

@Component({ selector: 'lib-discover-collections', templateUrl: './discover-collections.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class DiscoverCollectionsComponent {
  collections$: Observable<TopImageDTO[]> = this._getsAllTopImageDto.getAll();

  constructor(@Inject(GETS_ALL_TOP_IMAGE_DTO) private _getsAllTopImageDto: GetsAllTopImageDtoPort) {
  }
}
