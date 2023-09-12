import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {AproposComponent} from "./apropos/apropos.component";
import {MesoutilsComponent} from "./mesoutils/mesoutils.component";
import {SeancesComponent} from "./seances/seances.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'mesoutils', component: MesoutilsComponent},
  {path: 'seances', component: SeancesComponent},
  {path: 'apropos', component: AproposComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: 'accueil'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
