import { Tea } from './tea';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'edit-tea',
  templateUrl: './app/edit-tea.html'
})

export class editTeaComponent{
  @Input() tea: Tea;
}
