import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectionList } from '@angular/material/list';
import { TaskList } from 'src/app/models/classes/task-list';
import { EditorTaskListComponent } from 'src/app/shared/components/editor-task-list/editor-task-list.component';

@Component({
  selector: 'app-gerenciar-listas',
  templateUrl: './gerenciar-listas.component.html',
  styleUrls: ['./gerenciar-listas.component.css']
})
export class GerenciarListasComponent implements OnInit {

  constructor(
    private matDialog: MatDialog
  ) { }

  listasDeTarefas: TaskList[] = [];
  listaEmVisualizacao: TaskList | undefined;

  ngOnInit(): void {
    this.dataSeedingDebug();
    this.listaEmVisualizacao = this.listasDeTarefas[1];
  }

  listaSelecionada(listaSelecionada: MatSelectionList) {
    this.listaEmVisualizacao = listaSelecionada.selectedOptions.selected[0]?.value;
  }

  adicionarNovaLista(){
    var modalEditorTaskListRef = this.matDialog.open(EditorTaskListComponent, {
      width: '60%',
      height: 'auto'
    });

    modalEditorTaskListRef.afterClosed().subscribe((retorno: TaskList) => {
      if(retorno) {
        this.listasDeTarefas.push(retorno);
      }
    })
  }


  dataSeedingDebug() {
    var novaLista: TaskList[] = [];

    novaLista.push(new TaskList(
      "Lista de Exemplos",
      [
        {status: 1, concluida: false, nomeTask: "Tarefa um pipipipopopo"},
        {status: 1, concluida: false, nomeTask: "Tarefa dois pipipipopopo"},
        {status: 1, concluida: false, nomeTask: "Tarefa três pipipipopopo"},
        {status: 1, concluida: false, nomeTask: "Tarefa quatro pipipipopopo"},
      ])
    )

    novaLista.push(new TaskList(
      "Segunda Lista",
      [
        {status: 1, concluida: true, nomeTask: "Listando coisas"},
        {status: 1, concluida: true, nomeTask: "Algumas ja foram feitas"},
        {status: 1, concluida: false, nomeTask: "outras não"},
        {status: 1, concluida: false, nomeTask: "mas pelo menos da pra ver"},
        {status: 1, concluida: false, nomeTask: "quanto trabalho ainda tem pela frente"},
        {status: 1, concluida: false, nomeTask: "e caramba"},
        {status: 1, concluida: false, nomeTask: "haja trabalho!"},
        {status: 1, concluida: false, nomeTask: "tarefas!"},
        {status: 1, concluida: false, nomeTask: "tarefas tarefas!"},
        {status: 1, concluida: false, nomeTask: "trabalho!"},
        {status: 1, concluida: false, nomeTask: "trabalho tarefas!"},
      ])
    )

    novaLista.push(new TaskList(
      "Terceira lista",
      [
        {status: 1, concluida: true, nomeTask: "Essa aqui só tem uma coisa"},
      ])
    )

    novaLista.push(new TaskList(
      "Mais uma lista",
      [
        {status: 1, concluida: false, nomeTask: "Essa aqui tem duas"},
        {status: 1, concluida: false, nomeTask: "belas pendências"},
      ])
    )

    novaLista.push(new TaskList("Lista interminada que aind",[ ]))

    novaLista.push(new TaskList("Lista interminada que aind",[ ]))

    novaLista.push(new TaskList("Lista interminada que aind",[ ]))

    novaLista.push(new TaskList("Lista interminada que aind",[ ]))


    this.listasDeTarefas = novaLista;
  }

}
