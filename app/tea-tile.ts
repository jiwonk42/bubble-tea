import { Tea } from './tea';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TEAS } from './all-teas';

@Component({
  selector: 'tea-tile',
  templateUrl: './app/tea-tile.html'
})

export class TeaTileComponent{
  @Input() teas: Tea[];
  @Output() removeSend = new EventEmitter();
  removeTea(tea)
  {
    this.removeSend.emit(tea);
  }
  priceColor(tea) {
    if (tea.price < 4) {
      return "bg-danger";
    } else if (tea.price < 7) {
      return "bg-warning";
    } else {
      return "bg-success";
    }
  }
}
