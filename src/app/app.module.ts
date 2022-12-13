import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RandomComponent } from './random/random.component';
import { ListComponent } from './list/list.component';
import { RandomService } from './random/random.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [AppComponent, RandomComponent, ListComponent],
  bootstrap: [AppComponent],
  providers: [RandomService],
})
export class AppModule {}
