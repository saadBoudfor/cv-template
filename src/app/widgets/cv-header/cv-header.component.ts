import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cv-header',
  templateUrl: 'cv-header.component.html',
  styleUrls: ['cv-header.component.scss']
})
export class CvHeaderComponent {
  private _option: HeaderOption;

  get option(): HeaderOption {
    return this._option;
  }

  @Input()
  set option(value: HeaderOption) {
    this._option = value;
  }

}
