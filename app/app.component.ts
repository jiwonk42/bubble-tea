import { Component } from '@angular/core';
import { Tea } from './tea';
import { TEAS } from './all-teas';
import { Ingredient } from './ingredient';
import { INGREDIENTS } from './all-ingredients';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html'
})

export class AppComponent {
  teas = TEAS;
  ingredients = INGREDIENTS;
}
