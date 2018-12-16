import {Component, HostListener, OnInit} from '@angular/core';
import {Resume} from "./model/data/Resume";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Widget} from "./services/widget";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

}
