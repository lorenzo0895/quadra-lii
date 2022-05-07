import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ProcedureComponent } from './procedure/procedure.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'procedure',
        component: ProcedureComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
