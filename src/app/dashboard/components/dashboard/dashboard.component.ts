import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/app.state';
import { Image } from '../../../models/image.model'
import { getDashboard } from '../../state/dashboard.selector';
import { getImages } from '../../state/dashboard.actions';
import { addToAlbum } from '../../../albums/state/albums.actions';
import { Album } from '../../../models/album.model';
import { getAlbums } from '../../../albums/state/albums.selector';
import { AlbumModalComponent } from 'src/app/albums/components/album-modal/album-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'vs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  images: Observable<Image[]> = [] as any;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(getImages());
    this.images = this.store.select(getDashboard);
  }

  addToAlbum(image: Image, title: string) {
    let album = {} as Album;
    album.title = title;
    album.images = [image];
    this.store.dispatch(addToAlbum({album}));
  }

  openDialog(image: Image): void {
    const dialogRef = this.dialog.open(AlbumModalComponent, {
      data: { title: 'My Album One'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addToAlbum(image, result);
      }
    });
  }
}
