import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addToAlbum } from '../albums/state/albums.actions';
import { getAlbumById, getAlbums, getShowAlbumsDropdownButton } from '../albums/state/albums.selector';
import { getImages } from '../dashboard/state/dashboard.actions';
import { getDashboard, getImageById } from '../dashboard/state/dashboard.selector';
import { Album } from '../models/album.model';
import { Image } from '../models/image.model';
import { AppState } from './app.state';

@Injectable({ providedIn: 'root' })
export class StoreFacadeService {

  constructor(private store$: Store<AppState>) {}

  public get dashboard() {
    return {
      getSelectedAlbum$: (():Observable<Album | undefined> => this.store$.select(getAlbumById))(),
      getShowAlbumsDropdownButton$: (():Observable<boolean> => this.store$.select(getShowAlbumsDropdownButton))(),
      loadAlbums$: (():Observable<Album[]> => this.store$.select(getAlbums))(),
      getImageById$: (():Observable<Image | null> => this.store$.select(getImageById))(),
      loadImages$: ((): Observable<Image[]> => this.store$.select(getDashboard))(),
      addImageToAlbum: (album: Album, image: Image) => {
        this.store$.dispatch(addToAlbum({album, image}))
      },
      getImages: () => {
        this.store$.dispatch(getImages())
      }
      }
  }
}
