import {Component, OnInit, Input} from '@angular/core';
import {UserDetail} from "../../model/data/UserDetail";

@Component({
  selector: 'app-description-widget',
  templateUrl: 'description-widget.component.html',
  styleUrls: ['description-widget.component.scss']
})
export class DescriptionWidgetComponent implements OnInit {

  @Input() userDetails: UserDetail;

  constructor() {
  }

  ngOnInit() {
    this.userDetails = new UserDetail();
  }

}
