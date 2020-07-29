import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public currentDisc: number;
  public currentDate: Date;

  constructor() { }

  ngOnInit() {
    this.currentDisc = 12;
    this.currentDate = new Date();
  }

}
