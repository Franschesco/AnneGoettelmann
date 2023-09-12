import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MesoutilsComponent } from './mesoutils/mesoutils.component';
import { SeancesComponent } from './seances/seances.component';
import { AproposComponent } from './apropos/apropos.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { ContactComponent } from './contact/contact.component';
import {BodyComponent} from "./body/body.component";
import {MatMenuModule} from "@angular/material/menu";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import { SidenavComponent } from './sidenav/sidenav.component';
import {HttpClientModule} from "@angular/common/http";
import {BackgroundComponent} from "./background/background.component";
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MapsContainerComponent } from './maps-container/maps-container.component';
import {GoogleMap, GoogleMapsModule} from "@angular/google-maps";



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MesoutilsComponent,
    SeancesComponent,
    AproposComponent,
    ToolbarComponent,
    ContactComponent,
    BodyComponent,
    SidenavComponent,
    BackgroundComponent,
    BottomBarComponent,
    MapsContainerComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatTabsModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
      BrowserAnimationsModule,
      NoopAnimationsModule,
      HttpClientModule,
      BrowserModule,
      ReactiveFormsModule,
      GoogleMapsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
