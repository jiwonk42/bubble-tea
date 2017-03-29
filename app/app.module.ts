import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { TeaTileComponent } from './tea-tile';
import { IngredientTileComponent} from './ingredient-tile';
import { editTeaComponent } from './edit-tea';
import { editIngredientComponent } from './edit-ingredient';
import { newTeaComponent } from './new-tea.component';
import { newIngredientComponent } from './new-ingredient.component';

@NgModule({
  imports: [
  BrowserModule,
  FormsModule],
  declarations: [
  AppComponent,
  TeaTileComponent,
  IngredientTileComponent,
  editTeaComponent,
  editIngredientComponent,
  newTeaComponent,
  newIngredientComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
