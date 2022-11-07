import { EnumStatusTask } from "../enumerables/enum-status-task";

export class TaskItem {
  nomeTask: string;
  concluida: boolean;
  status: number;

  constructor(nomeTask = '', concluida = false) {
    this.nomeTask = nomeTask;
    this.concluida = concluida;
    this.status = EnumStatusTask.Adicionada;
  }
}
