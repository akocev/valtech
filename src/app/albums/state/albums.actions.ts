import { createAction, props } from '@ngrx/store';
import { Album } from 'app/models/album.model';
import { Image } from 'app/models/image.model';

export const removeFromAlbum = createAction('removeFromAlbum');
export const addToAlbum = createAction('addToAlbum', props<{ album: Album, image: Image}>());
