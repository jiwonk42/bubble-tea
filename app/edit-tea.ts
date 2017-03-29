import { Tea } from './tea';
import { Component, Input } from '@angular/core';
import { TEAS } from './all-teas';

@Component({
  selector: 'edit-tea',
  templateUrl: './app/edit-tea.html'
})

export class editTeaComponent{
  @Input() tea: Tea;
  remove(tea) {
    TEAS.splice(TEAS.indexOf(tea),1);
  }
}
