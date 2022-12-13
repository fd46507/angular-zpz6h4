import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routingmodule';
import { DetailsComponent } from './details/details.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    AddPersonComponent,
    NotFoundComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
