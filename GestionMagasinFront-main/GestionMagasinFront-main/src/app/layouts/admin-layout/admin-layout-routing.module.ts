import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListFactureComponent } from './list-facture/list-facture.component';



const routes: Routes = [
  
  {path:'', component:DashboardComponent},
  {path: 'list-facture', component:ListFactureComponent}

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
