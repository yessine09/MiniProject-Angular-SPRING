import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';


import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddFactureComponent } from './add-facture/add-facture.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainFactureComponent } from './main-facture/main-facture.component';
import { FactureComponent } from './facture/facture.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    ListFactureComponent,
    DashboardComponent,
    AddFactureComponent,
    MainFactureComponent,
    FactureComponent,
    UpdateFactureComponent,
    DetailFactureComponent,
  
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminLayoutModule { }
