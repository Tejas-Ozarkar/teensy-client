import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { CreateGroupComponent } from './components/create-group/create-group.component';
import { CreateUrlComponent } from './components/create-url/create-url.component';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { FormsModule } from '@angular/forms';
import { GroupComponent } from './components/group/group.component';



@NgModule({
  declarations: [
    CreateCardComponent,
    CreateGroupComponent,
    CreateUrlComponent,
    CustomModalComponent,
    GroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CreateCardComponent,
    CreateGroupComponent,
    CreateUrlComponent,
    CustomModalComponent,
    GroupComponent
  ]
})
export class SharedModule { }
