import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskList } from 'src/app/models/classes/task-list';

@Component({
  selector: 'app-editor-task-list',
  templateUrl: './editor-task-list.component.html',
  styleUrls: ['./editor-task-list.component.css']
})
export class EditorTaskListComponent implements OnInit {

  formEditorTaskList!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditorTaskListComponent>
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.formEditorTaskList = new FormGroup({
      nomeLista: new FormControl(""),
      nomeIconeLista: new FormControl()
    });
  }

  salvar() {
    if(this.formEditorTaskList.controls["nomeLista"].value.trim()) {
      var novaLista = new TaskList(this.formEditorTaskList.controls["nomeLista"].value.trim());
      this.dialogRef.close(novaLista);
    }
    else
      this.formEditorTaskList.controls["nomeLista"].setValue("");
  }

  fecharModal() {
    this.dialogRef.close(null);
  }

}
