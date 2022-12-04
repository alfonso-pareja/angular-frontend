import { Component, Input, OnInit } from '@angular/core';
import { IPostFavorite } from 'src/app/interfaces/favorites.interface';
import { ISong } from 'src/app/interfaces/list-tracks.interface';
import { ListTrackService } from 'src/app/services/list-tracks.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataSource!: ISong[];
  @Input() bandName!: string;

  loading: boolean = false;
  constructor(
    private util: UtilService,
    private service: ListTrackService) { }

  ngOnInit(): void {
  }

  async addToFavorites(song: ISong) {
    const favoriteBody: IPostFavorite = {
      nombre_banda: this.bandName,
      cancion_id: song.cancion_id,
      usuario: "Alfonso",
      ranking: "5/5"
    }

    this.loading = true;
    await this.service.setFavorites(favoriteBody)
      .then((response) => {
        this.util.showToast(
          response.status ? 'success' : 'warning',
          'Favoritos',
          response.message
          );
        if(response.status) song.isFavorite = true;
      });

    this.loading = false;


  }

}
