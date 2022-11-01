import { createAction, props } from '@ngrx/store';
import { Image } from 'src/app/models/image.model';

export const getImages = createAction('getImages');

export const getImagesSuccess = createAction('getImagesSuccess', props<{ images: Image[] }>());
export const dummyAction = createAction('dummyAction');
