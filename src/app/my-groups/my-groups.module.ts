import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyGroupsRoutingModule } from './my-groups-routing.module';
import { MyGroupsComponent } from './my-groups.component';


@NgModule({
  declarations: [MyGroupsComponent],
  imports: [
    CommonModule,
    MyGroupsRoutingModule
  ]
})
export class MyGroupsModule { }
