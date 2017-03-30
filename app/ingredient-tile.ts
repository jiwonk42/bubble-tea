import { Ingredient } from './ingredient';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { INGREDIENTS } from './all-ingredients';

@Component({
  selector: 'ingredient-tile',
  templateUrl: './app/ingredient-tile.html'
})

export class IngredientTileComponent{
  @Input() ingredients: Ingredient[];
  @Output() removeSend = new EventEmitter();
  removeIngredient(ingredient)
  {
    this.removeSend.emit(ingredient);
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

  filterByIngredientType: string = "all-ingredients";

  onChange(optionFromMenu){
    this.filterByIngredientType = optionFromMenu;
  }
}
