import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [
    TaskListComponent,
    MatExpansionModule,
    MatListModule,
    MatIconModule
  ],
})
export class SharedModule { }
