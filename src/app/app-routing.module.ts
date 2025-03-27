import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cliente/cadastrar/cadastrar.component';

const routes: Routes = [
  { path: 'cliente/cadastrar', component: CadastrarComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

