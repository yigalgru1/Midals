import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyNewConponentComponent } from './my-new-conponent/my-new-conponent.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNewConponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
