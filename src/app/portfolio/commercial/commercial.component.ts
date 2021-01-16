import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['../portfolio.component.css']
})
export class CommercialComponent implements OnInit, OnChanges, OnDestroy{

  @Input() audioMercedesBenz: HTMLAudioElement;
  @Input() audioChicco: HTMLAudioElement;
  constructor() { }

  ngOnInit(): void {
    // this.audioChicco = new Audio('../../assets/audio/Chicco2010.mp3'); 
    // this.audioMercedesBenz = new Audio('../../assets/audio/MercedesBenz.mp3'); 
  }
  // pausedAllElements()  {
  //   this.audioMercedesBenz.pause(); 
  //   this.audioChicco.pause();
  // }
  ngOnChanges(){
    console.log("destroy");
  }

  pausedAllElements(clip?)  {
    if(clip !== this.audioMercedesBenz){
      this.audioMercedesBenz.pause(); 
    }
    if(clip !== this.audioChicco){
      this.audioChicco.pause(); 
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