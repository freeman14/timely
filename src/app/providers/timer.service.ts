import { KEY_CODE } from './../models/keycode.model';
import { Injectable, HostListener } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { TimerType } from './../models/timer.model';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  $interval: Subscription;
  newTime: number;
  // time: number;

  timerType: TimerType;

  intermediateTime: number;
  timeLeft: number;
  time: Date = new Date(0, 0, 0, 0, 0, 0);

  inProgress: boolean;
  inPause: boolean;

  restDurations: {
    5: 300000;
    10: 600000;
  };

  durations = [
    { label: '15 mins', value: 900 },
    { label: '20 mins', value: 1200 },
    { label: '25 mins', value: 1500 },
    { label: '30 mins', value: 1800 },
    { label: '40 mins', value: 2400 }
  ];

  constructor() {}

  startTimer(duration: number, type: TimerType) {
    this.timerType = type;
    this.inPause = false;
    this.inProgress = true;
    this.intermediateTime = duration;
    const interval: Observable<number> = timer(0, 1000);
    this.$interval = interval
      .pipe(map(val => (val <= this.intermediateTime ? this.intermediateTime - val : this.$interval.unsubscribe())))
      .subscribe((time: number) => {
        this.timeLeft = time;
        this.time = new Date(0, 0, 0);
        this.time.setSeconds(time);
      });
  }

  stop() {
    this.$interval.unsubscribe();
    this.inProgress = false;
  }

  pause() {
    this.$interval.unsubscribe();
    this.intermediateTime = this.newTime - 1;
    this.inPause = true;
  }

  continue() {
    this.startTimer(this.timeLeft, this.timerType);
  }
}
