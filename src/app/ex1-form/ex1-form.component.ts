import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ex1-form',
  templateUrl: './ex1-form.component.html',
  styleUrls: ['./ex1-form.component.css']
})
export class Ex1FormComponent implements OnInit {

  username = '';
  isUsernameEmpty = false;
  userCreated = false;

  constructor() {
  }

  ngOnInit() {
  }

  onUpdateUsername(event: Event) {
    console.log(event);
    this.username = (<HTMLInputElement> event.target).value;
    if (this.username.length > 0) {
      this.isUsernameEmpty = true;
    } else {
      this.isUsernameEmpty = false;
    }
  }

  onCreateUser() {
    this.username = '';
    this.userCreated = true;
  }


}
