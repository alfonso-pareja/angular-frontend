import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  @Input() music!: string;
  player: HTMLAudioElement = new Audio();
  isPlaying: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  play(songUrl: string){
    this.player.src = songUrl;
    this.player.play();
    this.isPlaying = true;
  }

  pause(){
    this.player.pause();
    this.isPlaying = false;
  }

}
