import { Component, Input, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-locution',
  templateUrl: './locution.component.html',
  styleUrls: ['./locution.component.css']
})
export class LocutionComponent implements OnInit {
  @Input() audioTiendaHorrores: HTMLAudioElement;
  @Input() audioGuiltyGear: HTMLAudioElement;
  @Input() audioCofradia: HTMLAudioElement;
  showmore: boolean;
  video: any;
  source: any;
  sourceSelected: boolean;
  title: string;

  constructor() { }

  ngOnInit(): void {
    // this.audioTiendaHorrores = new Audio('../../assets/audio/tiendaHorrores.mp3'); 
   //this.audioGuiltyGear = new Audio('../../assets/audio/guiltyGear.mp3'); 
    //this.audioCofradia = new Audio('../../assets/audio/cofradiaSorbas.mp3'); 
  }
  pausedAllElements(clip?)  {
    if(clip !== this.audioTiendaHorrores){
      this.audioTiendaHorrores.pause(); 
    }
    if(clip !== this.audioGuiltyGear){
      this.audioGuiltyGear.pause(); 
    }
    if(clip !== this.audioCofradia){
      this.audioCofradia.pause(); 
    }
    
  }
  pauseClip(clip: HTMLAudioElement){
    if (clip.paused){
      clip.play();
    } else{
      clip.pause();
    }
    this.pausedAllElements(clip);
    // this.pausedAllElements();
  }
}
