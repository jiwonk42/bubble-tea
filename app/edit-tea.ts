import { Tea } from './tea';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TEAS } from './all-teas';

@Component({
  selector: 'edit-tea',
  templateUrl: './app/edit-tea.html'
})

export class editTeaComponent{
  @Input() tea: Tea;
  @Output() removeSend = new EventEmitter();
  removeTea(tea)
  {
    this.removeSend.emit(tea);
  }
}
