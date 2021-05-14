import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopicalityComponent} from './components/topicality/topicality.component';

const routes: Routes = [
  { path: '', component: TopicalityComponent},
  { path: 'Home', component: TopicalityComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
