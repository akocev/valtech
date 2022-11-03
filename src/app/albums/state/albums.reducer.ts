import { createReducer, on } from '@ngrx/store';
import { addToAlbum } from './albums.actions';
import { initialState } from './albums.state';

const _albumsReducer = createReducer(initialState,
  on(addToAlbum, (state, action) => {
  let album = {...action.album};
  album.id = (state.albums.length + 1).toString();
  // const existingAlbum = state.albums.find(res => res.title === album.title);

  // const updatedAlbums = state.albums.map(res => {
  //   if (res.title === album.title) {
  //     return [...res.images, ...album.images]
  //   }
  //   album.id = (state.albums.length + 1).toString();
  //   return [...res.images];
  // });


  // console.log(updatedAlbums, 'after');
  console.log(state.albums, 'state albums');
  return {
    ...state,
    albums: [...state.albums, album]
  }
}),);

export function albumsReducer(state: any, action: any) {
  return _albumsReducer(state, action);
}
