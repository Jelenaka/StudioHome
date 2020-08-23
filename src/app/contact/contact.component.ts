import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  // public itemContact: any;
  public  model;
  itemContact = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    asunto: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
});
  constructor() { }

  ngOnInit(): void {
    // this.itemContact = {};
  }

}
