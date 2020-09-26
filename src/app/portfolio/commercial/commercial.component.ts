import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

  audioMercedesBenz: HTMLAudioElement;
  audioChicco: HTMLAudioElement;
  constructor() { }

  ngOnInit(): void {
    this.audioChicco = new Audio('../../assets/audio/Chicco2010.mp3'); 
    this.audioMercedesBenz = new Audio('../../assets/audio/MercedesBenz.mp3'); 
  }
  pausedAllElements()  {
    this.audioMercedesBenz.pause(); 
    this.audioChicco.pause();
  }
}