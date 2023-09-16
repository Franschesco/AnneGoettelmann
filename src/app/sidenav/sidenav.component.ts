import {Component, EventEmitter, HostListener, OnInit, Output, Renderer2} from '@angular/core';
import {navbarData} from "./nav-data";
import {animate, style, transition, trigger} from "@angular/animations";
import {AppComponent} from "../app.component";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0}))
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('750ms',
          style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('10ms',
          style({opacity: 0}))
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    public appcomponent: AppComponent,
  ) {
  }

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed: boolean = true;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  scroll_to_top() {
    window.scrollTo({
      top: 0,
      behavior: "instant" // Pour un défilement instante,
    });
  }
  closeSidenav(): void {
    this.scroll_to_top();
    this.appcomponent.menu_is_clicked = true;
  }
}
