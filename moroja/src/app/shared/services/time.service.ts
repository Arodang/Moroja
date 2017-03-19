import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'time-service',
  templateUrl: './time.service.html',
})

@Injectable()
export class TimeService {

  private timer = {
    day: 0,
    time: 0,
    displayTime: "Time 0:00",
    displayDay: "Day 0"
  };

  constructor() { }

  addTime(timer) {

  }
}
