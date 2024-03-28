import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalComponent } from './session/local/local.component';
import { SessionStorageComponent } from './session/session-storage/session-storage.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    SessionStorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
