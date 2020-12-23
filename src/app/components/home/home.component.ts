import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean = false;
  errorMessage: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;

    this.spotify.getNewReleases().subscribe(
      (data) => {
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (errorService) => {
        this.loading = false;
        this.error = true;
        this.errorMessage = errorService.error.error.message;
      }
    );
  }

  ngOnInit() {}
}
