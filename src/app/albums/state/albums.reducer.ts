import { createReducer, on } from '@ngrx/store';
import { addToAlbum } from './albums.actions';
import { initialState } from './albums.state';

const _albumsReducer = createReducer(initialState,
  on(addToAlbum, (state, action) => {
  let album = {...action.album};
  let image = action.image;

  console.log('on add to album', state, action);
  const existingAlbum = state.albums.find(res => res.title === album.title);
  if (!existingAlbum) {
    album.id = (state.albums.length + 1).toString();
    album.images = [image]
    return {
      ...state,
      albums: [...state.albums, album]
    }

  } else {
    album.id = existingAlbum.id;
    album.images = [image, ...existingAlbum.images];

    return {
      ...state,
      albums: [...state.albums.filter(album => album.id !== existingAlbum.id), album]
    }
  }

}),);

export function albumsReducer(state: any, action: any) {
  return _albumsReducer(state, action);
}
