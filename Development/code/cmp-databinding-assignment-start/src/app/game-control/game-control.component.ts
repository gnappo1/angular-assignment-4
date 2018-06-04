import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalStarted = new EventEmitter<number>();
  interval;
  previousNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onClickStart() {
    this.interval = setInterval(() => {
      this.intervalStarted.emit(this.previousNumber + 1);
      this.previousNumber++;
    }, 1000);
  }

  onClickStop() {
    clearInterval(this.interval);
  }
}
