import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { GroupsComponent } from './groups/groups.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, CreateComponent, GroupsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BsDropdownModule,
    FormsModule,
    ModalModule.forRoot(),
    SharedModule
  ]
})
export class HomeModule { }
