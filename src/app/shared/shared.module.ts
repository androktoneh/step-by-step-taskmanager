import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { AppModule } from '../app.module';

import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [
    TaskListComponent,
    MatExpansionModule
  ],
})
export class SharedModule { }
