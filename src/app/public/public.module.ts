import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProcedureComponent,
    NewsComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
