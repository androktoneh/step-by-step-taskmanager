import { AfterViewInit, Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material/expansion';
import { TaskItem } from 'src/app/models/classes/task-item';
import { TaskList } from 'src/app/models/classes/task-list';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  @Input() listaDeTarefas!: TaskList | undefined;
  novaTarefaNome: string = '';

  ngOnInit(): void {
  }


  adicionarNovaTarefa() {
    if(this.novaTarefaNome && this.novaTarefaNome.trim()) {
      var novaTarefa = new TaskItem(this.novaTarefaNome.trim());
      this.listaDeTarefas?.tarefas.push(novaTarefa);
    }
    this.novaTarefaNome = '';
  }

  removerTaskDaLista(taskItem: any) {
    var indexTask = this.listaDeTarefas!.tarefas.findIndex(x => x === taskItem);
    if(indexTask < 0) return;

    this.listaDeTarefas!.tarefas.splice(indexTask, 1);
  }
}
