import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AlbumModalComponent } from 'src/app/albums/components/album-modal/album-modal.component';
import { addToAlbum } from 'src/app/albums/state/albums.actions';
import { getAlbums } from 'src/app/albums/state/albums.selector';
import { Album } from 'src/app/models/album.model';
import { Image } from 'src/app/models/image.model';
import { AppState } from 'src/app/store/app.state';
import { getImageById } from '../../state/dashboard.selector';

@Component({
  selector: 'vs-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  image: Observable<Image | null> = {} as any;
  albums: Observable<Album[]> = [] as any;
  constructor(private store: Store<AppState>, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.image = this.store.select(getImageById);
    this.albums = this.store.select(getAlbums);
  }

  addToAlbum(image: Image, title: string) {
    let album = {} as Album;
    album.title = title;
    this.store.dispatch(addToAlbum({album, image}));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlbumModalComponent, {
      data: { title: 'My Album One'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.image.subscribe(img => {
          if (img) {
            this.addToAlbum(img, result);
          }
        })
      }
    });
  }
}
