import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewRegistrationComponent } from './components/new-registration/new-registration.component';
import { SSNRegistrationService } from "src/app/services/ssn-registration.service";

@NgModule({
  declarations: [
    AppComponent,
    NewRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SSNRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
