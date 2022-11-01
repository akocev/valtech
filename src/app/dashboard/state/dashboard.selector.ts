import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Image } from 'src/app/models/image.model';
import { RouterStateUrl } from 'src/app/store/router/custom-serializer';
import { getCurrentRoute } from 'src/app/store/router/router.selector';
import { DashboardState } from './dashboard.state';

const getDashboardState = createFeatureSelector<DashboardState>('images');

export const getDashboard = createSelector(getDashboardState, (state) => {
  return state.images;
})

export const getImageById = createSelector(
  getDashboard,
  getCurrentRoute,
  (images, route: RouterStateUrl) => {
    return images ? images[route.params['id']] : null;
  }
);

