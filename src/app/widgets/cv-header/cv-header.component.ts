import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cv-header',
  templateUrl: 'cv-header.component.html',
  styleUrls: ['cv-header.component.scss']
})
export class CvHeaderComponent implements OnInit {
  public headerClass: string = "";
  @Input() state: string;
  constructor() {
  }
  ngOnInit() {
  }

}
