import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from 'src/app/models/classes/task-list';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  @Input() listaDeTarefas: TaskList | undefined;

  ngOnInit(): void {
  }

}
