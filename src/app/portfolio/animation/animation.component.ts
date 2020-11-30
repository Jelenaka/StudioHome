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

  pausedAllElements(event?)  {
      this.audioBaki.pause(); 
  }

}
