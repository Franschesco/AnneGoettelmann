import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { animate, style, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Router} from "@angular/router";
import {ToolbarComponent} from "../toolbar/toolbar.component";

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1000ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class SeancesComponent implements AfterViewInit {
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  constructor(
    private renderer: Renderer2,
    private toolbar: ToolbarComponent,
  ) {}

  index: number = 0;

  ngAfterViewInit() {
    // Démarrez le changement automatique d'onglet après l'initialisation de la vue
    this.startTabChange();
    setInterval(() => {
      this.after_index();
    }, 5000);
  }

  naviguate_to_contact() {
    this.toolbar.contact_event();
  }

  before_index() {
    this.index -= 1;
    if (this.index == -1) {
      this.index = 3;
    }
  }

  after_index() {
    this.index += 1;
    if (this.index == 4) {
      this.index = 0;
    }
  }

  startTabChange() {
    setInterval(() => {
      if (this.tabGroup) {
        const selectedIndex = this.tabGroup.selectedIndex;
        const tabCount = this.tabGroup._tabs.length;

        // Passez à l'onglet suivant, revenez au premier s'il n'y en a plus
        if (selectedIndex !== null && selectedIndex < tabCount - 1) {
          this.tabGroup.selectedIndex = selectedIndex + 1;
        } else {
          this.tabGroup.selectedIndex = 0;
        }
        this.index = this.tabGroup.selectedIndex; // Mettez à jour l'index
      }
    }, 10000); // 10000 ms = 10 secondes
  }

  get_sec_layer() {
    if (window.innerWidth < 800) {
      return ('sec_layer_little');
    }
    return ('sec_layer');
  }

  get_text_sec_layer() {
    if (window.innerWidth < 800) {
      return ('text_left_sec_layer_little');
    }
    return ('text_left_sec_layer');
  }

  get_text_left() {
    if (window.innerWidth < 800) {
      return ('text_left_little');
    }
    return ('text_left');
  }

  get_img_right_sec_layer() {
    if (window.innerWidth < 800) {
      return ('img_right_sec_layer_little');
    }
    return ('img_right_sec_layer');
  }

  get_pour_qui_pour_quoi_div() {
    if (window.innerWidth < 1000) {
      return ('pour_qui_pour_quoi_div_little');
    }
    return ('pour_qui_pour_quoi_div');
  }

  get_pour_qui_div() {
    if (window.innerWidth < 1000) {
      return ('pour_qui_div_little');
    }
    return ('pour_qui_div');
  }

  get_space_text() {
    if (window.innerWidth < 1000) {
      return ('space_text_little');
    }
    return ('space_text');
  }

  get_box_button() {
    if (window.innerWidth < 600) {
      return ('box_button_little');
    }
    return ('box_button');
  }
  get_button_f() {
    if (window.innerWidth < 600) {
      return ('button-74_little');
    }
    return ('button-74');
  }
}
