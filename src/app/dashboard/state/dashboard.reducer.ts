
import { createReducer, on } from '@ngrx/store';
import { getImagesSuccess } from './dashboard.actions';
import { initialState } from './dashboard.state';

const _dashboardReducer = createReducer(initialState,
on(getImagesSuccess, (state, action) => {
  return {
    ...state,
    images: action.images
  }
}));

export function dashboardReducer(state: any, action: any) {
  return _dashboardReducer(state, action);
}
