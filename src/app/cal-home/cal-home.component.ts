import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal-home',
  templateUrl: './cal-home.component.html',
  styleUrls: ['./cal-home.component.css']
})
export class CalHomeComponent implements OnInit {
  viewDate: Date = new Date();
  events = [];
  constructor() { }

  ngOnInit() {
  }

}
