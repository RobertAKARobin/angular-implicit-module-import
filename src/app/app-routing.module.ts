import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChildComponent } from './child';

const routes: Routes = [
  {
    path: '',
    component: ChildComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
