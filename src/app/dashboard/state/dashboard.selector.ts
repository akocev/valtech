import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from 'app/store/router/custom-serializer';
// import { getCurrentRoute } from 'app/store/router/router.selector';
import { DashboardState } from './dashboard.state';

const getDashboardState = createFeatureSelector<DashboardState>('images');

export const getDashboard = createSelector(getDashboardState, (state) => {
  return state.images;
})

export const getImageById = createSelector(
  getDashboard,
  // getCurrentRoute,
  (images) => {
    // return images ? images[route.params['id']] : null;
    return null;
  }
);

