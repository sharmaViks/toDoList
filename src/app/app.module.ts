import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateToDoComponent } from './create-to-do/create-to-do.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DoneListComponent } from './done-list/done-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateToDoComponent,
    ToDoListComponent,
    DoneListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
