import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from './ingredient';

@Pipe({
  name: "ingredienttype",
  pure: false
})

export class IngredientTypePipe implements PipeTransform{
  transform(input: Ingredient[], typeOfIngredient){
    var output: Ingredient[] = [];
    if (typeOfIngredient === "liquid-ingredient"){
      for (let i = 0; i < input.length; i++) {
        if( (input[i].category).includes('liquid'))
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (typeOfIngredient === "fruit-ingredient"){
      for (let i = 0; i < input.length; i++) {
        if( (input[i].category).includes('fruit'))
        {
          output.push(input[i]);
        }
      }
      return output;
    } else if (typeOfIngredient === "others"){
      for (let i = 0; i < input.length; i++) {
        if( (input[i].category).includes('others'))
        {
          output.push(input[i]);
        }
      }
      return output;
    }else {
      return input;
    }
  }
}
