import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { allroutes } from './routes';


const routes: Routes = allroutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
