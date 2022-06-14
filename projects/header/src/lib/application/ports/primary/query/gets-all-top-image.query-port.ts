import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TopImageQuery } from './top-image.query';

export const GETS_ALL_TOP_IMAGE_QUERY = new InjectionToken<GetsAllTopImageQueryPort>('GETS_ALL_TOP_IMAGE_QUERY');

export interface GetsAllTopImageQueryPort {
  getAllTopImageQuery(): Observable<TopImageQuery[]>;
}
