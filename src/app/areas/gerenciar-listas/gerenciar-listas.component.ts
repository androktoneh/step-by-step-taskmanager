import { Component, OnInit } from '@angular/core';
import { TaskItem } from 'src/app/models/classes/task-item';
import { TaskList } from 'src/app/models/classes/task-list';

@Component({
  selector: 'app-gerenciar-listas',
  templateUrl: './gerenciar-listas.component.html',
  styleUrls: ['./gerenciar-listas.component.css']
})
export class GerenciarListasComponent implements OnInit {

  constructor() { }

  listasDeTarefas: TaskList[] = [];
  listaEmVisualizacao: TaskList | undefined;

  ngOnInit(): void {
    this.dataSeedingDebug();
  }


  dataSeedingDebug() {
    var novaLista: TaskList[] = [];
    novaLista.push(new TaskList("Tarefas Sample 0", []));
    novaLista.push(new TaskList("Tarefas Sample 1", []));
    novaLista.push(new TaskList("Tarefas Sample 2", []));
    novaLista.push(new TaskList("Tarefas Sample 3", []));
    novaLista.push(new TaskList("Tarefas Sample 4", []));

    this.listasDeTarefas = novaLista;
  }

}
