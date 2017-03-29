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

  removeIngredient(ingredient) {
    INGREDIENTS.splice(INGREDIENTS.indexOf(ingredient),1);
  }

  removeTea(tea) {
    TEAS.splice(TEAS.indexOf(tea),1);
  }

  submitNewTea(tea){
    TEAS.push(tea);
  }

  submitNewIngredient(ingredient){
    INGREDIENTS.push(ingredient);
  }
}
