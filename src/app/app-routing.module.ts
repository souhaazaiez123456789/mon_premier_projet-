import { SouhaComponent } from './souha/souha.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path:  'mon-premier', component: MonPremierComponent } ,
{  path:  'souha', component: SouhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
