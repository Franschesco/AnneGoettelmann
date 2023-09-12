import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {AppComponent} from "../app.component";
import { Location } from '@angular/common';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {

  AccueilClicked = true;
  OutilsClicked = false;
  SeancesClicked = false;
  ProposClicked = false;
  ContactClicked = false;

  collapsed: boolean = this.appcomponent.collapsed;

  constructor(
    private router: Router,
    private appcomponent: AppComponent,
    private location: Location,
  ) {}

  rootUrl: string = this.location.prepareExternalUrl('');
  ngOnInit(): void {
    this.router.navigate(['/accueil'])
    this.refresh_tool_bar();
  }

  scroll_to_top() {
    window.scrollTo({
      top: 0,
      behavior: "instant" // Pour un défilement instante,
    });
  }
  f_logo_class() {
    if (this.appcomponent.screenWidth > 550) {
      return ('logo_big');
    } else {
      return ('logo_little');
    }
  }

  refresh_tool_bar(){
    this.collapsed = this.appcomponent.collapsed;
    setTimeout(() => this.refresh_tool_bar(), 100);
  }

  menu_is_click () {
    if (this.appcomponent.menu_is_clicked === false) {
      this.appcomponent.menu_is_clicked = true;
      return ;
    } else {
      this.appcomponent.menu_is_clicked = false;
    }
  }
  all_false() {
    this.AccueilClicked = false;
    this.OutilsClicked = false;
    this.SeancesClicked = false;
    this.ProposClicked = false;
    this.ContactClicked = false;
  }
  accueil_event () {
    this.all_false();
    this.AccueilClicked = true;
    this.scroll_to_top();
    this.router.navigate(['/accueil'])
  }

  mesoutils_event () {
    this.all_false();
    this.OutilsClicked = true;
    this.scroll_to_top();
    this.router.navigate(['/mesoutils'])
  }

  seances_event () {
    this.all_false();
    this.SeancesClicked = true;
    this.scroll_to_top();
    this.router.navigate(['/seances'])
  }

  apropos_event () {
    this.all_false();
    this.ProposClicked = true;
    this.scroll_to_top();
    this.router.navigate(['/apropos'])
  }

  contact_event () {
    this.all_false();
    this.ContactClicked = true;
    this.scroll_to_top();
    this.router.navigate(['/contact'])
  }
}
