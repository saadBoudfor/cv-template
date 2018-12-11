import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cv-header',
  templateUrl: 'cv-header.component.html',
  styleUrls: ['cv-header.component.scss']
})
export class CvHeaderComponent {
   private _state: string = '';

  constructor() {
  }
  @Input()
  set state(state: string) {
    this._state = state;
  }

  get state(): string {
    return this._state;
  }
}
