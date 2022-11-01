import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlbumsState } from './albums.state';

const getAlbumsState = createFeatureSelector<AlbumsState>('albums');

export const getAlbums = createSelector(getAlbumsState, (state) => {
  return state.albums;
})
