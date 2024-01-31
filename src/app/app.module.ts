import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddYardageComponent } from './components/add-yardage/add-yardage.component';
import { YardageDetailsComponent } from './components/yardage-details/yardage-details.component';
import { YardagesListComponent } from './components/yardages-list/yardages-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YardagesCalculatorComponent } from './components/yardages-calculator/yardages-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    AddYardageComponent,
    YardageDetailsComponent,
    YardagesListComponent,
    YardagesCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
