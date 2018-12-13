import {Component, OnInit, Input} from '@angular/core';
import {Service} from "../../model/data/Service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  @Input() service: Service;

  constructor() { }

  ngOnInit() {
  }

}
