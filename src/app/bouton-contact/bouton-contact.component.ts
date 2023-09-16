import { Component } from '@angular/core';
import {ToolbarComponent} from "../toolbar/toolbar.component";

@Component({
  selector: 'app-bouton-contact',
  templateUrl: './bouton-contact.component.html',
  styleUrls: ['./bouton-contact.component.scss']
})
export class BoutonContactComponent {

  constructor(
    private toolbar : ToolbarComponent,
  ) {
  }
  naviguate_to_contact() {
    this.toolbar
  }

}
