import { createReducer, on } from '@ngrx/store';
import { addToAlbum } from './albums.actions';
import { initialState } from './albums.state';

const _albumsReducer = createReducer(initialState,
  on(addToAlbum, (state, action) => {
  let album = {...action.album};
  album.id = (state.albums.length + 1).toString();
  return {
    ...state,
    albums: [...state.albums, album]
  }
}),);

export function albumsReducer(state: any, action: any) {
  return _albumsReducer(state, action);
}
