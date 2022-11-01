import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/app.state';
import { Album } from '../../../models/album.model';
import { getAlbums } from '../../state/albums.selector';

@Component({
  selector: 'vs-album',
  templateUrl: './album.component.html',
})
export class AlbumComponent implements OnInit {

  albums: Observable<Album[]> = [] as any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.albums = this.store.select(getAlbums);
  }
}
