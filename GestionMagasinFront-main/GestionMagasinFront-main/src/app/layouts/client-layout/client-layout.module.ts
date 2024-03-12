import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientLayoutRoutingModule } from './client-layout-routing.module';
import { ListeFacturesComponent } from './listeFactures/liste-factures.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PayementComponent } from './payement/payement.component';
import { DetailFacturesComponent } from './detail-factures/detail-factures.component';


@NgModule({
  declarations: [
    ListeFacturesComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    PayementComponent,
    DetailFacturesComponent
  ],
  imports: [
    CommonModule,
    ClientLayoutRoutingModule
  ]
})
export class ClientLayoutModule { }
