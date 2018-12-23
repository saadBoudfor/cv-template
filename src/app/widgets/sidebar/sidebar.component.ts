import { Component, OnInit } from '@angular/core';
import {Widget} from "../../services/widget";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public widgetList = Widget.AllWithAnchor;

  constructor() { }

  ngOnInit() {
  }

}
