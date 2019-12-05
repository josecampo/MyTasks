import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './tasks/main/main.component';
import { ListComponent } from './tasks/list/list.component';
import { DetailsComponent } from './tasks/details/details.component';
import { FormComponent } from './tasks/form/form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'agregar-tarea', component: FormComponent },
  { path: 'list', component: ListComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

