import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [],
})
export class ArtistComponent implements OnInit {
  artista: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe((param) => {
      this.getArtist(param.id);
      this.getTopTracks(param.id);
    });
  }

  ngOnInit(): void {}

  getArtist(id: string) {
    this.spotify.getArtist(id).subscribe((artista) => {
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify
      .getTopTracks(id)
      .subscribe((tracks) => (this.topTracks = tracks));
  }
}
