import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailFacturesComponent } from './detail-factures/detail-factures.component';
import { ListeFacturesComponent } from './listeFactures/liste-factures.component';
import { PayementComponent } from './payement/payement.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'listeFactures', component:ListeFacturesComponent},
  {path:'payement', component:PayementComponent},
   {path:'listDetail/:id', component:DetailFacturesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientLayoutRoutingModule { }
