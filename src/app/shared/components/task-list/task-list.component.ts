import { Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskItem } from 'src/app/models/classes/task-item';
import { TaskList } from 'src/app/models/classes/task-list';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  @Input() listaDeTarefas: TaskList | undefined;
  novaTarefaNome: string = '';

  @ViewChildren(TaskItemComponent)
    taskItemComponents!: QueryList<TaskItemComponent>;

  ngOnInit(): void {
  }

  adicionarNovaTarefa() {
    if(this.novaTarefaNome && this.novaTarefaNome.trim()) {
      var novaTarefa = new TaskItem(this.novaTarefaNome.trim());
      this.listaDeTarefas?.tarefas.push(novaTarefa);
    }
    this.novaTarefaNome = '';
  }
}
