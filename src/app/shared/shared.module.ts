import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { CreateGroupComponent } from './components/create-group/create-group.component';
import { CreateUrlComponent } from './components/create-url/create-url.component';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { FormsModule } from '@angular/forms';
import { GroupComponent } from './components/group/group.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FilterPipe } from './pipes/FilterPipe';



@NgModule({
  declarations: [
    CreateCardComponent,
    CreateGroupComponent,
    CreateUrlComponent,
    CustomModalComponent,
    GroupComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule
  ],
  exports: [
    CreateCardComponent,
    CreateGroupComponent,
    CreateUrlComponent,
    CustomModalComponent,
    GroupComponent,
    FilterPipe
  ]
})
export class SharedModule { }
