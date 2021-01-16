import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {
 @Input() audioBaki: HTMLAudioElement;
  source: string;
  title: string;
  sourceSelected: boolean;

  constructor() { }

  ngOnInit(): void {
   // this.audioBaki = new Audio('../../assets/audio/Baki1.mp3'); 
  }

  // pausedAllElements(event?)  {
  //     this.audioBaki.pause(); 
  // }
  pausedAllElements(clip?)  {
    if(clip !== this.audioBaki){
      this.audioBaki.pause(); 
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
