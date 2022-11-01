import { Image } from 'src/app/models/image.model';

export interface DashboardState {
  images: Image []
}

export const initialState: DashboardState = {
  images: []
}
