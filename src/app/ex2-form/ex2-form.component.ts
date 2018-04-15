import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-ex2-form',
  templateUrl: './ex2-form.component.html',
  styleUrls: ['./ex2-form.component.css']
})
export class Ex2FormComponent implements OnInit {

  hide = false;
  clickNum = [];

  constructor() {
  }

  ngOnInit() {
  }

  onChangeStatus() {

    if (this.hide) {
      this.hide = false;
    } else {
      this.hide = true;
    }
    this.clickNum.push(new Date());
  }


}
