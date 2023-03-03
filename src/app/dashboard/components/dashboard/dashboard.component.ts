import { Observable } from 'rxjs';
import { Image } from '../../../models/image.model'
import { Album } from '../../../models/album.model';
// import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { StoreFacadeService } from 'app/store/store-facade.service';
import { AlbumModalComponent } from 'app/albums/components/album-modal/album-modal.component';

@Component({
  selector: 'vs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  images: Observable<Image[]> = [] as any;

  constructor(private storeFacade: StoreFacadeService,) {}

  ngOnInit(): void {
    this.storeFacade.dashboard.getImages();
    this.images = this.storeFacade.dashboard.loadImages$;
  }

  addToAlbum(image: Image, title: string) {
    let album = {title: title} as Album;
    this.storeFacade.dashboard.addImageToAlbum(album, image);
  }

  // openDialog(image: Image): void {
  //   const dialogRef = this.dialog.open(AlbumModalComponent, {
  //     data: { title: ''}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.addToAlbum(image, result);
  //     }
  //   });
  // }
}
