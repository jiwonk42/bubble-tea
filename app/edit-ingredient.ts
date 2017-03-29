import { Ingredient } from './ingredient';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'edit-ingredient',
  templateUrl: './app/edit-ingredient.html'
})

export class editIngredientComponent{
  @Input() ingredient: Ingredient;
}
