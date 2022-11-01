import { albumsReducer } from '../albums/state/albums.reducer';
import { AlbumsState } from '../albums/state/albums.state';
import { dashboardReducer } from '../dashboard/state/dashboard.reducer';
import { DashboardState } from '../dashboard/state/dashboard.state';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface AppState {
  dashboard: DashboardState;
  albums: AlbumsState;
  router: RouterReducerState;
}

export const appReducer = {
  images: dashboardReducer,
  albums: albumsReducer,
  router: routerReducer,
}
