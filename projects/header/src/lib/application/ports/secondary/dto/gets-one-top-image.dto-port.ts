import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TopImageDTO } from './top-image.dto';

export const GETS_ONE_TOP_IMAGE_DTO = new InjectionToken<GetsOneTopImageDtoPort>('GETS_ONE_TOP_IMAGE_DTO');

export interface GetsOneTopImageDtoPort {
  getOne(id: string): Observable<TopImageDTO>;
}
