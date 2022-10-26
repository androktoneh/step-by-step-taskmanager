import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarListasComponent } from './gerenciar-listas/gerenciar-listas.component';

const routes: Routes = [
  { path: '', component: GerenciarListasComponent, outlet: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
