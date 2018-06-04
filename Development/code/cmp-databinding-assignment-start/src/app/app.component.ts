import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evensArray: number[] = [];
  oddsArray: number[] = [];

  onIntervalStarted(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evensArray.push(firedNumber)
    } else {
      this.oddsArray.push(firedNumber)
    }
  }
}
