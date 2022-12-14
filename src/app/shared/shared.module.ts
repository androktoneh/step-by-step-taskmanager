import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';


import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { EditorTaskListComponent } from './components/editor-task-list/editor-task-list.component';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    EditorTaskListComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TaskListComponent,
    EditorTaskListComponent,
    MatExpansionModule,
    MatListModule,
    MatIconModule
  ],
})
export class SharedModule { }
