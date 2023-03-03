import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../../models/album.model';
import { Location } from '@angular/common';
import { StoreFacadeService } from 'app/store/store-facade.service';

@Component({
  selector: 'vs-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  album: Observable<Album | undefined> = [] as any;

  constructor(private storeFacade: StoreFacadeService, private location: Location) {}

  ngOnInit(): void {
    this.album = this.storeFacade.dashboard.getSelectedAlbum$;
  }

  navigateBack(): void {
    this.location.back();
  }
}
