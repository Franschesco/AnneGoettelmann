import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToolbarComponent} from "./toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Anne';

  constructor(
    private router: Router,
  ) {}

  screenWidth = 0;
  collapsed = false;
  menu_is_clicked = false;

  ngOnInit(): void {
    this.refresh_tool_bar();
  }

  refresh_tool_bar(){
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 1350) {
      this.collapsed = true;
    } else {
      this.menu_is_clicked = true;
      this.collapsed = false;
    }
    setTimeout(() => this.refresh_tool_bar(), 100);
  }
}
