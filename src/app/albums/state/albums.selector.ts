import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { getCurrentRoute } from 'app/store/router/router.selector';
import { AlbumsState } from './albums.state';

const getAlbumsState = createFeatureSelector<AlbumsState>('albums');

export const getAlbums = createSelector(getAlbumsState, (state) => {
  return state.albums;
});

export const getAlbumById = createSelector(getAlbums, (albums) => {
  const id = ''
  if (id) {
    return albums.find(album => album.id === id);
  }
  return undefined;
});

export const getShowAlbumsDropdownButton = createSelector(getAlbums, (albums) => {
  return albums.length > 0;
});

