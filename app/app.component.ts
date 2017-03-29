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

  priceColor(tea) {
    if (tea.price < 4) {
      return "bg-danger";
    } else if (tea.price < 7) {
      return "bg-warning";
    } else {
      return "bg-success";
    }
  }

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
}
