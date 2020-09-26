import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {
  audio: HTMLAudioElement;
  audioBaki: HTMLAudioElement;
  //TODO USAR : HTMLVideoElement
  video: any;
  video2: any;
  video3: any;

  constructor() { }

  ngOnInit(): void {
    this.audioBaki = new Audio('../../assets/audio/Baki1.mp3'); 
    this.video = document.getElementById('video');
    this.video2 = document.getElementById('video2');
  }

  pausedAllElements(code)  {
    if (code === 'B'){
      this.audioBaki.play(); 
    } else {
      this.audioBaki.pause(); 
    }
  }

}
