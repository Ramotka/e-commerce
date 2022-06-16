import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { TopImageDTO } from '../../../application/ports/secondary/dto/top-image.dto';
import {
  GETS_ALL_TOP_IMAGE_DTO,
  GetsAllTopImageDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-top-image.dto-port';
import { CollectionsQuery } from '../../../application/ports/primary/query/collections.query';
import { DiscoverCollectionsQuery } from '../../../application/ports/primary/query/discover-collections.query';

@Component({
  selector: 'lib-discover-collections',
  templateUrl: './discover-collections.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiscoverCollectionsComponent {
  collectionsQuery$: Observable<DiscoverCollectionsQuery> =
    this._getsAllTopImageDto
      .getAll()
      .pipe(map((collections) => new DiscoverCollectionsQuery(collections)));

  constructor(
    @Inject(GETS_ALL_TOP_IMAGE_DTO)
    private _getsAllTopImageDto: GetsAllTopImageDtoPort
  ) {}
}
