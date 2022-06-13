import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TopImageDTO } from './top-image.dto';

export const GETS_ALL_TOP_IMAGE_DTO =
  new InjectionToken<GetsAllTopImageDtoPort>('GETS_ALL_TOP_IMAGE_DTO');

export interface GetsAllTopImageDtoPort {
  getAll(): Observable<TopImageDTO[]>;
}
