import { Component, Output, EventEmitter } from '@angular/core';
import { Tea } from './tea';

@Component({
  selector: 'new-tea',
  templateUrl:'./app/new-tea.component.html'
})

export class newTeaComponent {
  @Output() submitNewTeaSend = new EventEmitter();

  submitNewTea(name: string, flavor: string, remaining: number, price: number) {
    var newTea: Tea = new Tea(name, flavor, remaining, price);
    this.submitNewTeaSend.emit(newTea);
  }
}
