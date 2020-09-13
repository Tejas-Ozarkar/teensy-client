import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpInterceptorService } from './shared/services/http-interceptor.service';
import { CreateUrlComponent } from './shared/components/create-url/create-url.component';
import { CustomModalComponent } from './shared/components/custom-modal/custom-modal.component';
import { CreateCardComponent } from './shared/components/create-card/create-card.component';
import { CreateGroupComponent } from './shared/components/create-group/create-group.component';
import { RedirectionComponent } from './redirection/redirection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateUrlComponent,
    CustomModalComponent,
    CreateCardComponent,
    CreateGroupComponent,
    RedirectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
