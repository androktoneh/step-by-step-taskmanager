import { Component, OnInit } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
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
    this.listaEmVisualizacao = this.listasDeTarefas[0];
  }

  listaSelecionada(listaSelecionada: MatSelectionList) {
    this.listaEmVisualizacao = listaSelecionada.selectedOptions.selected[0]?.value;
  }


  dataSeedingDebug() {
    var novaLista: TaskList[] = [];

    novaLista.push(new TaskList(
      "Lista de Exemplos",
      [
        {concluida: false, nomeTask: "Tarefa um pipipipopopo"},
        {concluida: false, nomeTask: "Tarefa dois pipipipopopo"},
        {concluida: false, nomeTask: "Tarefa três pipipipopopo"},
        {concluida: false, nomeTask: "Tarefa quatro pipipipopopo"},
      ])
    )

    novaLista.push(new TaskList(
      "Segunda Lista",
      [
        {concluida: true, nomeTask: "Listando coisas"},
        {concluida: true, nomeTask: "Algumas ja foram feitas"},
        {concluida: false, nomeTask: "outras não"},
        {concluida: false, nomeTask: "mas pelo menos da pra ver"},
        {concluida: false, nomeTask: "quanto trabalho ainda tem pela frente"},
        {concluida: false, nomeTask: "e caramba"},
        {concluida: false, nomeTask: "haja trabalho!"},
      ])
    )

    novaLista.push(new TaskList(
      "Terceira lista",
      [
        {concluida: true, nomeTask: "Essa aqui só tem uma coisa"},
      ])
    )

    novaLista.push(new TaskList(
      "Mais uma lista",
      [
        {concluida: false, nomeTask: "Essa aqui tem duas"},
        {concluida: false, nomeTask: "belas pendências"},
      ])
    )

    novaLista.push(new TaskList("Lista interminada que aind",[ ]))

    this.listasDeTarefas = novaLista;
  }

}
