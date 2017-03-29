import { Ingredient } from './ingredient';
import { Component, Input } from '@angular/core';
import { INGREDIENTS } from './all-ingredients';

@Component({
  selector: 'edit-ingredient',
  templateUrl: './app/edit-ingredient.html'
})

export class editIngredientComponent{
  @Input() ingredient: Ingredient;
  remove(ingredient) {
    INGREDIENTS.splice(INGREDIENTS.indexOf(ingredient),1);
  }
}
