import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { getImages, getImagesSuccess } from './dashboard.actions';
import { DashboardState, initialState } from './dashboard.state';

const _dashboardReducer = createReducer(initialState,
on(getImagesSuccess, (state, action) => {
  console.log(action.images, 'from actions');
  return {
    ...state,
    images: action.images
  }
}));

export function dashboardReducer(state: any, action: any) {
  return _dashboardReducer(state, action);
}
