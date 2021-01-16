import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { SMTPClient } from 'emailjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', ]
})
export class ContactComponent implements OnInit {

  require: any;
  // public itemContact: any;
  public model;
  itemContact = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    asunto: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
    // const client = new SMTPClient({
    //   user: 'user',
    //   password: 'password',
    //   host: 'smtp.your-email.com',
    //   ssl: true,
    // });
    const element = document.getElementById('topScroll');
    element.scrollIntoView(true);

    
// send the message and get a callback with an error or details of the message that was sent
// client.send(
// 	{
// 		text: 'i hope this works',
// 		from: 'you <username@your-email.com>',
// 		to: 'someone <someone@your-email.com>, another <another@your-email.com>',
// 		cc: 'else <else@your-email.com>',
// 		subject: 'testing emailjs',
// 	},
// 	(err, message) => {
// 		console.log(err || message);
// 	}
// );
    // this.itemContact = {};
  }
  sendMail(){ 
//     Email.send({
//     Host : "smtp.paconietolocutor.com",
//     Username : "info@paconietolocutor.com",
//     Password : "cuenta10407",
//     To : 'info@paconietolocutor.com',
//     From : "egnieto22@gmail.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
// message => alert(message)
// );
}
  // public sendEmail(e: Event) {
  //   e.preventDefault();
  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_USER_ID')
  //     .then((result: EmailJSResponseStatus) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // }

  // sendMail() {
    // var email  = require('emailjs/email');
    //   var server  = email.server.connect({
    //     user:    "<sender’s-email>", 
    //     password:"<sender’s-password>", 
    //     host:    "smtp.your-email.com", 
    //     ssl:     true,
    //     port: 465
    //  });
  // }

  sendMail2() {
  //   Email.send({
  //     Host : "smtp.yourisp.com",
  //     Username : "username",
  //     Password : "password",
  //     To : 'them@website.com',
  //     From : "you@isp.com",
  //     Subject : "This is the subject",
  //     Body : "And this is the body"
  // }).then(
  //   message => alert(message)
  // );
  }

}
