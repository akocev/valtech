import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/app.state';
import { Album } from '../../../models/album.model';
import { getAlbumById, getAlbums } from '../../state/albums.selector';

@Component({
  selector: 'vs-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  album: Observable<Album | undefined> = [] as any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.album = this.store.select(getAlbumById);
  }
}
