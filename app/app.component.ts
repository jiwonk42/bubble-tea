import { Component } from '@angular/core';
import { Tea } from './tea';
import { TEAS } from './all-teas';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html'
})

export class AppComponent {
  teas = TEAS;
}
