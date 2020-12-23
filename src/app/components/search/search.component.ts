import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  artistas: Array<any> = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {}

  ngOnInit(): void {}

  search(busqueda: string) {
    this.loading = true;
    this.spotify.getArtists(busqueda).subscribe((data) => {
      this.artistas = data;
      this.loading = false;
    });
  }
}
