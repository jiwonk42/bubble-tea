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

  amountColor(ingredient){
    if (ingredient.quantity < 5){
      return "bg-warning";
    } else if (ingredient.quantity < 10){
      return "bg-info";
    } else {
      return "bg-success";
    }
  }

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
