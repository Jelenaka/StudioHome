import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  audioTiendaHorrores: HTMLAudioElement;
  audioGuiltyGear: HTMLAudioElement;
  audioCofradia: HTMLAudioElement;
  audioDiablo: HTMLAudioElement;
  audioTheWitcher: HTMLAudioElement;
  audioDishonored: HTMLAudioElement;
  audioVocento: HTMLAudioElement;
  audioMercedesBenz: HTMLAudioElement;
  audioChicco: HTMLAudioElement;
  audioBaki: HTMLAudioElement;

  openLocucion: boolean = true;
  openVideogame: boolean = false;
  openAnimation: boolean = false;
  openCommecial: boolean = false;
  openElearning: boolean = false;
  constructor() { }

  ngOnInit(): void {
    const element = document.getElementById('topcScroll');
    element.scrollIntoView(true);
    this.audioTiendaHorrores = new Audio('../../assets/audio/tiendaHorrores.mp3'); 
    this.audioGuiltyGear = new Audio('../../assets/audio/guiltyGear.mp3'); 
    this.audioCofradia = new Audio('../../assets/audio/cofradiaSorbas.mp3'); 
    this.audioTheWitcher = new Audio('../../assets/audio/TheWitcher.mp3'); 
    this.audioDiablo = new Audio('../../assets/audio/DiabloIII.mp3'); 
    this.audioDishonored = new Audio('../../assets/audio/Dishonored.mp3');
    this.audioVocento = new Audio('../../assets/audio/LocucionVocento.mp3'); 
    this.audioChicco = new Audio('../../assets/audio/Chicco2010.mp3'); 
    this.audioMercedesBenz = new Audio('../../assets/audio/MercedesBenz.mp3'); 
    this.audioBaki = new Audio('../../assets/audio/Baki1.mp3'); 
  }
  pausedAllElements()  {
    this.audioTiendaHorrores.pause(); 
    this.audioGuiltyGear.pause();
    this.audioCofradia.pause();
    this.audioDiablo.pause(); 
    this.audioDishonored.pause();
    this.audioTheWitcher.pause();
    this.audioVocento.pause();
    this.audioChicco.pause()
    this.audioMercedesBenz.pause()
    this.audioBaki.pause();
}

// openTab(item){
//   if(this.openLocucion == item){
//     this.openLocucion = true;
//   } else {
//     this.openLocucion = false;
//   }
//   if(this.openVideogame == item){
//     this.openVideogame = true;
//   } else {
//     this.openVideogame = false;
//   }
//   if(this.openAnimation == item){
//     this.openAnimation = true;
//   } else {
//     this.openAnimation = false;
//   }
//   if(this.openCommecial == item){
//     this.openCommecial = true;
//   } else {
//     this.openCommecial = false;
//   }
//   if(this.openElearning == item){
//     this.openElearning = true;
//   } else {
//     this.openElearning = false;
//   }
// }

closeAll(){
  this.openElearning = false;
  this.openCommecial = false;
  this.openAnimation = false;
  this.openVideogame = false;
  this.openLocucion = false;
}

}
