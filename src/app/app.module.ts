import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BoardComponent} from './board/board.component';
import {StageComponent} from './stage/stage.component';
import {TaskComponent} from './task/task.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateTaskComponent } from './create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    StageComponent,
    TaskComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
