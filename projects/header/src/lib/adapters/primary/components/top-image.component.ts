import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TopImageDTO } from '../../../application/ports/secondary/dto/top-image.dto';
import {
  GETS_ONE_TOP_IMAGE_DTO,
  GetsOneTopImageDtoPort,
} from '../../../application/ports/secondary/dto/gets-one-top-image.dto-port';

@Component({
  selector: 'lib-top-image',
  templateUrl: './top-image.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopImageComponent {
  topImages$: Observable<TopImageDTO> = this._getsOneTopImageDto.getOne(
    'ujWnPve5VMTdNyB7ulKj'
  );

  constructor(
    @Inject(GETS_ONE_TOP_IMAGE_DTO)
    private _getsOneTopImageDto: GetsOneTopImageDtoPort
  ) {}
}
