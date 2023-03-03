import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
// import { MatDialog } from '@angular/material/dialog';
import { AlbumModalComponent } from 'app/albums/components/album-modal/album-modal.component';
import { Album } from 'app/models/album.model';
import { Image } from 'app/models/image.model';
import { StoreFacadeService } from 'app/store/store-facade.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'vs-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  image: Observable<Image | null> = {} as any;
  albums: Observable<Album[]> = [] as any;
  constructor(private storeFacade: StoreFacadeService, private location: Location) {}

  ngOnInit(): void {
    this.image = this.storeFacade.dashboard.getImageById$;
    this.albums = this.storeFacade.dashboard.loadAlbums$;
  }

  addToAlbum(image: Image, title: string) {
    let album = {title: title} as Album;
    this.storeFacade.dashboard.addImageToAlbum(album, image);
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(AlbumModalComponent, {
  //     data: { title: ''}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.image.subscribe(img => {
  //         if (img) {
  //           this.addToAlbum(img, result);
  //         }
  //       })
  //     }
  //   });
  // }

  navigateBack(): void {
    this.location.back();
  }
}
