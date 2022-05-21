import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComandesComponent } from './comandes/comandes.component';
import { ComandeCreatComponent } from './comandes/comande-creat/comande-creat.component';
import { CommandeListComponent } from './comandes/commande-list/commande-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { PaimentsComponent } from './paiments/paiments.component';
import { PaimentCreatComponent } from './paiments/paiment-creat/paiment-creat.component';
import { PaimentListComponent } from './paiments/paiment-list/paiment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ComandesComponent,
    ComandeCreatComponent,
    CommandeListComponent,
    PaimentsComponent,
    PaimentCreatComponent,
    PaimentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
