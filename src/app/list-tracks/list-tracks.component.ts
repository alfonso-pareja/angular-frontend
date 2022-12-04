import { Component, OnInit } from '@angular/core';
import { ISong } from '../interfaces/list-tracks.interface';

@Component({
  selector: 'app-list-tracks',
  templateUrl: './list-tracks.component.html',
  styleUrls: ['./list-tracks.component.scss']
})
export class ListTracksComponent implements OnInit {

  ListTracks: ISong[] = [];
  bandName!: string;
  constructor() { }

  ngOnInit(): void {
  }


  infoList(listSongs: ISong[]){
    this.ListTracks = listSongs
  }

  setBandName(name: string){
    this.bandName = name;
  }

}
