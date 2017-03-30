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
  sellTea(tea)
  {
    tea.remaining -=1;
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

  quantityColor(tea) {
    if (tea.remaining > 10) {
      return "bg-info";
    } else if (tea.remaining > 5) {
      return "bg-success";
    } else if (tea.remaining > 1) {
      return "bg-warning";
    } else {
      return "bg-danger";
    }
  }
}
