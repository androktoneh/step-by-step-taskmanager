import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskItem } from 'src/app/models/classes/task-item';
import { EnumStatusTask } from 'src/app/models/enumerables/enum-status-task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit, AfterViewInit {

  @Input() taskItem: TaskItem = new TaskItem();
  @Output() removerListaOutput = new EventEmitter<TaskItem>();
  @ViewChildren('nomeTaskInput') inputNomeTask!: QueryList<any>

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // if(this.taskItem.status == EnumStatusTask.Adicionada) {
    //   this.aplicarFoco();
    // }
  }

  edicaoNomeTask(event: any) {
    this.taskItem.nomeTask = event.target.value;
  }

  // aplicarFoco() {
  //   var testando = this.inputNomeTask.get(0);
  //   testando?.nativeElement.focus();
  // }

}
