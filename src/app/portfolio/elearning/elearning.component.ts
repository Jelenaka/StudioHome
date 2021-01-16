import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elearning',
  templateUrl: './elearning.component.html',
  styleUrls: ['../portfolio.component.css']
})
export class ElearningComponent implements OnInit {
  
  @Input() audioVocento: HTMLAudioElement;

  constructor() { }

  ngOnInit(): void {
    // this.audioVocento = new Audio('../../assets/audio/LocucionVocento.mp3'); 
  }
    
  // pausedAllElements()  {
  //   if (this.audioVocento.paused) {
  //     this.audioVocento.play();
  // } else {
  //   this.audioVocento.pause();
  // }
  // }


  pausedAllElements(clip?)  {
    if(clip !== this.audioVocento){
      this.audioVocento.pause(); 
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
    this.pausedAllElements(null);
  }
}
