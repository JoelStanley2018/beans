import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { SingleComponent } from './single/single.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path: '', component: ListComponent },
  {path: 'pets', component: ListComponent},
  {path: 'pet/new', component: NewComponent},
  {path: 'pet/:id', component: SingleComponent},
  {path: 'edit/:id', component: EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
