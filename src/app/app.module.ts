import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { AllAllertComponent } from './all-allert/all-allert.component';
import { ServerComponent } from './server/server.component';
import { Ex1FormComponent } from './ex1-form/ex1-form.component';
import { Ex2FormComponent } from './ex2-form/ex2-form.component';


@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AllAllertComponent,
    ServerComponent,
    Ex1FormComponent,
    Ex2FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
