import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter = 0;
  lessCounter = 0;
  name = '';
  search = '';

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  countClick() {
    this.clickCounter += 1;
  }

  // tslint:disable-next-line: typedef
  countClickLess() {
    this.clickCounter -= 1;
  }

  // tslint:disable-next-line: typedef
  setClasess() {
    // tslint:disable-next-line: prefer-const
    let myClassess = {
      active: this.clickCounter > 5,
      deActive: this.clickCounter <= 5
    }

    return myClassess;
  }
}
