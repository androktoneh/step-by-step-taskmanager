import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarListasComponent } from './gerenciar-listas/gerenciar-listas.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GerenciarListasComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AreasModule { }
