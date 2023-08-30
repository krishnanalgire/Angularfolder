import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContacteditComponent } from './contactedit/contactedit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CreatecontactComponent,
    ContactlistComponent,
    ContacteditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
