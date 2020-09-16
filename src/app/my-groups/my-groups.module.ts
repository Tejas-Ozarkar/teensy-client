import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyGroupsRoutingModule } from './my-groups-routing.module';
import { MyGroupsComponent } from './my-groups.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MyGroupsComponent],
  imports: [
    CommonModule,
    MyGroupsRoutingModule,
    SharedModule
  ]
})
export class MyGroupsModule { }
