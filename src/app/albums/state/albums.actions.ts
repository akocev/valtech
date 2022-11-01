import { createAction, props } from '@ngrx/store';
import { Album } from 'src/app/models/album.model';

export const removeFromAlbum = createAction('removeFromAlbum');
export const addToAlbum = createAction('addToAlbum', props<{ album: Album}>());
