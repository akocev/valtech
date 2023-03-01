import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(private http: HttpClient) {}

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`https://picsum.photos/v2/list?page=1&limit=12`)
    .pipe(
      map((data) => {
        const images: Image[] = [];
        for(let image of data) {
          let res = image.download_url.split('id/');
          res[1] = res[1].substring(0, 1) + '/400'
          const url = res[0] + 'id/' + res[1];
          image.download_url = url;

          images.push(image);
        }
        return images;
      })
    )

  }

  getImageById(id: string): Observable<Image> {
    return this.http.get<Image>(`https://picsum.photos/id/${id}/info`).pipe(
      map((image) => {
        return image;
      })
    )
  }
}
