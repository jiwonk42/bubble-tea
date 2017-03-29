import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { editTeaComponent } from './edit-tea';
import { editIngredientComponent } from './edit-ingredient';

@NgModule({
  imports: [
  BrowserModule,
  FormsModule],
  declarations: [
  AppComponent,
  editTeaComponent,
  editIngredientComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
