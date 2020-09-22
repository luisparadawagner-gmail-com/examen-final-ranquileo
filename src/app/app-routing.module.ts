import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NoticiasComponent} from 'src/app/noticias/noticias.component';
import {TablaNoticiasComponent} from 'src/app/tabla-noticias/tabla-noticias.component';
const routes: Routes = [
  {path: 'noticias-component', component: NoticiasComponent},
  {path: 'tabla-component', component: TablaNoticiasComponent},
  {path: '',redirectTo: 'tabla-component',pathMatch: 'full'},
  {path: '**',component:TablaNoticiasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
