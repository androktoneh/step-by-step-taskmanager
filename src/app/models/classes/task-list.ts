import { TaskItem } from "./task-item";



export class TaskList {
  nomeLista: string;
  categoriaLista: string;
  corLista: string;
  tarefas: TaskItem[];

  constructor(nomeLista: string = '', tarefas: TaskItem[] = []) {
    this.nomeLista = nomeLista;
    this.tarefas = tarefas;
    this.categoriaLista = '';
    this.corLista = '';
  }
}
