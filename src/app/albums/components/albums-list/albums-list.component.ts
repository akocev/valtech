import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/app.state';
import { Album } from '../../../models/album.model';
import { getAlbums, getShowAlbumsDropdownButton } from '../../state/albums.selector';
import { StoreFacadeService } from 'src/app/store/store-facade.service';

@Component({
  selector: 'vs-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit{

  albums: Observable<Album[]> = [] as any;
  albumsListDisplayed = false;

  constructor(private storeFacade: StoreFacadeService) {}

  ngOnInit(): void {
    this.albums = this.storeFacade.dashboard.loadAlbums$;
  }

  get showAlbumsDropdownButton(): Observable<boolean> {
    return this.storeFacade.dashboard.getShowAlbumsDropdownButton$;
  }

  displayAlbumsList() {
    this.albumsListDisplayed = !this.albumsListDisplayed;
  }
}
