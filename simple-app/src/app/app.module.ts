import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GenerateNumbersComponent} from "./generate-numbers/generate-numbers.component";
import {HttpClientModule} from "@angular/common/http";
import {NumberService} from "./services/numer.services";
import {FormsModule} from "@angular/forms";
import {GenerateAverageComponent} from "./generate-average/generate-average.component";
import {NumberSectionComponent} from "./number-section/number-section.component";

@NgModule({
  declarations: [
    AppComponent,
    GenerateNumbersComponent,
    GenerateAverageComponent,
    NumberSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //to ngModel
    FormsModule
  ],
  providers: [NumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
