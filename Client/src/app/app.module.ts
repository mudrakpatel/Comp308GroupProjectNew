import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NurseComponent } from './nurse/nurse.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    NurseComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
