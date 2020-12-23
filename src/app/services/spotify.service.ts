import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  urlServer: string = environment.url;

  constructor(private http: HttpClient) {}

  getEndpoint(endpoint: string) {
    const url = `${this.urlServer}/${endpoint}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBG1rMJIoe2DkitENqxUzJY6VdIORuDqdwl1h2AeUGYfuyNvzatg0LRnaEV2oVbwYW0Zlh05koerO9FMHc',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getEndpoint('browse/new-releases?limit=21').pipe(
      map((data: any) => data.albums.items)
    );
  }

  getArtists(busqueda: string) {
    return this.getEndpoint(`search?q=${busqueda}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtist(id: string) {
    return this.getEndpoint(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getEndpoint(`artists/${id}/top-tracks?market=us`).pipe(
      map((data: any) => data.tracks)
    );
  }
}
