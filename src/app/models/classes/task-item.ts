
export class TaskItem {
  nomeTask: string;
  concluida: boolean;

  constructor(nomeTask = '', concluida = false) {
    this.nomeTask = nomeTask;
    this.concluida = concluida;
  }
}
