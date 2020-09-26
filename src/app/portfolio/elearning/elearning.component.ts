import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elearning',
  templateUrl: './elearning.component.html',
  styleUrls: ['./elearning.component.css']
})
export class ElearningComponent implements OnInit {
  
  audioVocento: HTMLAudioElement;
  constructor() { }

  ngOnInit(): void {
    this.audioVocento = new Audio('../../assets/audio/LocucionVocento.mp3'); 
  }
    
  pausedAllElements()  {
    if (this.audioVocento.paused) {
      this.audioVocento.play();
  } else {
    this.audioVocento.pause();
  }
  }

}
