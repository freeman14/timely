import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private notification = new Audio();

  constructor() {
    this.loadAudio();
  }

  playNotification() {
    this.notification.play();
  }

  private loadAudio() {
    this.notification.src = '../../../assets/audio/success.m4a';
    this.notification.load();
  }
}
