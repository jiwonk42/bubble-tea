import { Component, Output, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient';

@Component({
  selector: 'new-ingredient',
  templateUrl:'./app/new-ingredient.component.html'
})

export class newIngredientComponent {
  @Output() submitNewIngredientSend = new EventEmitter();

  submitNewIngredient(name: string, category: string, quantity: number) {
    var newIngredient = new Ingredient(name, category, quantity);
    this.submitNewIngredientSend.emit(newIngredient);
  }
}
