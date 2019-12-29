import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalHomeComponent } from './cal-home/cal-home.component';


const routes: Routes = [
  {
    path: '',
    component: CalHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
