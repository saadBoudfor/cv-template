import {Component, OnInit, Input} from '@angular/core';
import {Services} from "@angular/core/src/view";

@Component({
  selector: 'app-service-page',
  templateUrl: 'service-page.component.html',
  styleUrls: ['service-page.component.scss']
})
export class ServicePageComponent implements OnInit {
  @Input() services: Services[];

  constructor() {
  }

  ngOnInit() {
  }

}
