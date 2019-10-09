import { KEY_CODE } from './../../models/keycode.model';
import { Component, OnInit, HostListener } from '@angular/core';

import { TimerType } from './../../models/timer.model';
import { TimerService } from './../../providers/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  time: number;

  constructor(public timerService: TimerService) {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event.keyCode);
    switch (event.keyCode) {
      case KEY_CODE.SPACE:
        this.timerService.inPause ? this.continue() : this.pause();
        break;
      case KEY_CODE.E:
        if (this.timerService.inProgress) {
          this.stop();
        }
        break;
      case KEY_CODE.ONE:
        if (!this.timerService.inProgress) {
          this.startTimer(this.timerService.durations[0].value);
        }
        break;
      case KEY_CODE.TWO:
        if (!this.timerService.inProgress) {
          this.startTimer(this.timerService.durations[1].value);
        }
        break;
      case KEY_CODE.THREE:
        if (!this.timerService.inProgress) {
          this.startTimer(this.timerService.durations[2].value);
        }
        break;
      case KEY_CODE.FOUR:
        if (!this.timerService.inProgress) {
          this.startTimer(this.timerService.durations[3].value);
        }
        break;
      case KEY_CODE.FIVE:
        if (!this.timerService.inProgress) {
          this.startTimer(this.timerService.durations[4].value);
        }
        break;
    }
  }

  ngOnInit() {}

  startTimer(time: number) {
    this.timerService.startTimer(time || this.time, TimerType.Work);
  }

  stop() {
    this.timerService.stop();
  }

  pause() {
    this.timerService.pause();
  }

  continue() {
    this.timerService.continue();
  }
}
