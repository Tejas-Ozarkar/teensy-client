import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'group/:groupId', component: GroupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
