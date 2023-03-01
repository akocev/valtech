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
import { StoreFacadeService } from 'src/app/store/store-facade.service';

@Component({
  selector: 'vs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  images: Observable<Image[]> = [] as any;

  constructor(private storeFacade: StoreFacadeService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.storeFacade.dashboard.getImages();
    this.images = this.storeFacade.dashboard.loadImages$;
  }

  addToAlbum(image: Image, title: string) {
    let album = {title: title} as Album;
    this.storeFacade.dashboard.addImageToAlbum(album, image);
  }

  openDialog(image: Image): void {
    const dialogRef = this.dialog.open(AlbumModalComponent, {
      data: { title: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addToAlbum(image, result);
      }
    });
  }
}
