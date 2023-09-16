import {Component, Renderer2} from '@angular/core';
import {ToolbarComponent} from "../toolbar/toolbar.component";

@Component({
  selector: 'app-mesoutils',
  templateUrl: './mesoutils.component.html',
  styleUrls: ['./mesoutils.component.scss']
})
export class MesoutilsComponent {

  constructor(
    private toolbar: ToolbarComponent,
  ) {}
  naviguate_to_contact() {
    this.toolbar.contact_event();
  }

  scrool_to (divToScrollTo: any) {
    if (divToScrollTo) {
      // Obtenez la position de la div par rapport au haut de la page
      const divPosition = divToScrollTo.getBoundingClientRect().top + window.scrollY;

      // Utilisez window.scrollTo() pour faire défiler la page jusqu'à la position de la div
      window.scrollTo({

        top: divPosition - 100,
        behavior: 'smooth' // Pour un défilement fluide, utilisez 'smooth'
      });
    }
  }

  hypnose_humaniste_f() {
    const divToScrollTo = document.getElementById('id_hypnose_humaniste');
    this.scrool_to(divToScrollTo);
  }

  art_therapie_f() {
    const divToScrollTo = document.getElementById('id_art_therapie');
    this.scrool_to(divToScrollTo);
  }

  gestalt_f() {
    const divToScrollTo = document.getElementById('id_gestalt');
    this.scrool_to(divToScrollTo);
  }

  soins_energetique_f() {
    const divToScrollTo = document.getElementById('id_soins_energ');
    this.scrool_to(divToScrollTo);
  }
}
