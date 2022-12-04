import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListTrackService } from 'src/app/services/list-tracks.service';
import { UtilService } from 'src/app/services/util.service';
import { ISong } from 'src/app/interfaces/list-tracks.interface';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {
  @Output() infoList = new EventEmitter<ISong[]>();
  @Output() bandName = new EventEmitter<string>();
  
  formSearch!: string;
  loading:     boolean = false;
  listSongs:   ISong[] = [];

  constructor(
      private util: UtilService,
      private service: ListTrackService) { }

  ngOnInit(): void { }

  /**
   * Busqueda de canciones por nombre de banda
   */
  async searchTrack(){
    const bandName = this.formSearch;
    this.loading = true;

    try {
      // Se obtiene la lista de canciones
      const trackList = await this.service
        .searchTrackByTerm(bandName, 25)
        .then((response) => response)
  
      // Se obtiene la lista de Favoritos
      const favoriteSongs = await this.service
        .getFavorites()
        .then((favorites) => favorites);
      
        if (trackList && !trackList.status ){
          return this.util.showToast('warning', 'Busqueda', trackList.message);
        }
    
        if(!trackList.data || trackList.data && trackList.data.canciones && !trackList.data.canciones.length)
          return this.util.showToast('warning', 'Busqueda', 'No se encontraron resultados para la busqueda');
    
        // Se busca si en la lista de canciones existe una en favoritos
        if(favoriteSongs && favoriteSongs.data && favoriteSongs.data.length){
          (trackList.data.canciones).map((song: ISong) => {
            if(favoriteSongs.data &&
              (favoriteSongs.data).some((favorite) => favorite.cancion_id == song.cancion_id))
                song.isFavorite = true;
              
          })
        }
    
        this.listSongs = trackList.data.canciones;
        this.loading   = false;

    } catch (error) {
      this.loading   = false
      return this.util.showToast('danger', 'App', 'Ocurrio un problema, reintenta.');
    }


    this.infoList.emit(this.listSongs);
    this.bandName.emit(bandName);
  }

}
