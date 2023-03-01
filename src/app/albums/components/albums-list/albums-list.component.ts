import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/app.state';
import { Album } from '../../../models/album.model';
import { getAlbums, getShowAlbumsDropdownButton } from '../../state/albums.selector';

@Component({
  selector: 'vs-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit{

  albums: Observable<Album[]> = [] as any;
  albumsListDisplayed = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.albums = this.store.select(getAlbums);
  }

  displayAlbumsList() {
    this.albumsListDisplayed = !this.albumsListDisplayed;
  }

  get showAlbumsDropdownButton(): Observable<boolean> {
    return this.store.select(getShowAlbumsDropdownButton);
  }
}
