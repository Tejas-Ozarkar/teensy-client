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
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AdminsComponent } from './components/admins/admins.component';
import { EditCardComponent } from './components/edit-card/edit-card.component';



@NgModule({
  declarations: [
    CreateCardComponent,
    CreateGroupComponent,
    CreateUrlComponent,
    CustomModalComponent,
    GroupComponent,
    FilterPipe,
    SnackbarComponent,
    LoaderComponent,
    AdminsComponent,
    EditCardComponent
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
    FilterPipe,
    SnackbarComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
