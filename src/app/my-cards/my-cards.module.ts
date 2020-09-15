import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCardsRoutingModule } from './my-cards-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { MyCardsComponent } from './my-cards.component';


@NgModule({
  declarations: [MyCardsComponent],
  imports: [
    CommonModule,
    MyCardsRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class MyCardsModule { }
