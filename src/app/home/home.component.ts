import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('audioOption') audioPlayerRef: ElementRef;
  constructor() {
  }


  ngOnInit(): void {
  }

  onAudioPlay(){
    this.audioPlayerRef.nativeElement.play();
  }
}
