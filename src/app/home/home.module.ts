import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { OurClientsComponent } from './home/our-clients/our-clients.component';
import { BusinessReinventComponent } from './home/business-reinvent/business-reinvent.component';
import { MarkitingComponent } from './home/markiting/markiting.component';


@NgModule({
  declarations: [
    HomeComponent,
    OurClientsComponent,
    BusinessReinventComponent,
    MarkitingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ], exports: [
    HomeComponent
  ]
})
export class HomeModule { }
