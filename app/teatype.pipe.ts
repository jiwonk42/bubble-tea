import { Pipe, PipeTransform } from '@angular/core';
import { Tea } from './tea';

@Pipe({
  name: "teatype",
  pure: false
})

export class TeaTypePipe implements PipeTransform{
  transform(input: Tea[], typeOfTea){
    var output: Tea[] = [];
    if (typeOfTea === "milk-tea"){
      for (let i = 0; i < input.length; i++) {
        if( (input[i].name).includes('milk tea'))
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (typeOfTea === "fruit-tea"){
        for (let i = 0; i < input.length; i++) {
          if( (input[i].name).includes('fruit tea'))
          {
            output.push(input[i]);
          }
        }
        return output;
    } else if (typeOfTea === "others"){
    for (let i = 0; i < input.length; i++) {
      if(! (input[i].name.includes('fruit tea') || input[i].name.includes('milk tea') ))
      {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
  }
}
}
