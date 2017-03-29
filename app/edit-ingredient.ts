import { Ingredient } from './ingredient';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { INGREDIENTS } from './all-ingredients';

@Component({
  selector: 'edit-ingredient',
  templateUrl: './app/edit-ingredient.html'
})

export class editIngredientComponent{
  @Input() ingredient: Ingredient;
  @Output() removeSend = new EventEmitter();
  remove(ingredient)
  {
    this.removeSend.emit(ingredient);
  }
}
