import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectionComponent } from './redirection/redirection.component';
import { GroupComponent } from './shared/components/group/group.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'my-cards', loadChildren: () => import('./my-cards/my-cards.module').then(m => m.MyCardsModule) },
  { path: 'my-groups', loadChildren: () => import('./my-groups/my-groups.module').then(m => m.MyGroupsModule) },
  { path: 'group/:groupId', component: GroupComponent },
  { path: ':id', component: RedirectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
