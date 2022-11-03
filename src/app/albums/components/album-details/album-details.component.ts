import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/app.state';
import { Album } from '../../../models/album.model';
import { getAlbums } from '../../state/albums.selector';

@Component({
  selector: 'vs-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  albums: Observable<Album[]> = [] as any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.albums = this.store.select(getAlbums);
  }
}
