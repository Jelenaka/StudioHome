import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent implements OnInit {
  @Input() audioDiablo: HTMLAudioElement;
  @Input() audioTheWitcher: HTMLAudioElement;
  @Input() audioDishonored: HTMLAudioElement;
  constructor() { }

  ngOnInit(): void {
    // this.audioTheWitcher = new Audio('../../assets/audio/TheWitcher.mp3'); 
    // this.audioDiablo = new Audio('../../assets/audio/DiabloIII.mp3'); 
    // this.audioDishonored = new Audio('../../assets/audio/Dishonored.mp3');
  }
  // pausedAllElements()  {
  //   this.audioDiablo.pause(); 
  //   this.audioDishonored.pause();
  //   this.audioTheWitcher.pause();
  // }

  pausedAllElements(clip?)  {
    if(clip !== this.audioDiablo){
      this.audioDiablo.pause(); 
    }
    if(clip !== this.audioDishonored){
      this.audioDishonored.pause(); 
    }
    if(clip !== this.audioTheWitcher){
      this.audioTheWitcher.pause(); 
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
  
ngOnDestroy (){
  this.pausedAllElements();
}
}
