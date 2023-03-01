import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getCurrentRoute } from 'src/app/store/router/router.selector';
import { AlbumsState } from './albums.state';

const getAlbumsState = createFeatureSelector<AlbumsState>('albums');

export const getAlbums = createSelector(getAlbumsState, (state) => {
  return state.albums;
});

export const getAlbumById = createSelector(getAlbums, getCurrentRoute, (albums, route) => {
  const id = route.params['id'];
  if (id) {
    return albums.find(album => album.id === id);
  }
  return undefined;
});

