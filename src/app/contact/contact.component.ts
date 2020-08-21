import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  public itemContact: any;

  constructor() { }

  ngOnInit(): void {
    this.itemContact = {name:'', phone:'', email:'', asunto:'', description:''};
  }

}
