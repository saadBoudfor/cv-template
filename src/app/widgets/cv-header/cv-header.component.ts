import {Component, Input} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-cv-header',
  templateUrl: 'cv-header.component.html',
  styleUrls: ['cv-header.component.scss']
})
export class CvHeaderComponent {
  private _state: string = '';
  private _cvLogo: string = environment.imagesServerURL + '/photos/b4-logo.png';

  @Input()
  set state(state: string) {
    this._state = state;
  }

  get state(): string {
    return this._state;
  }

  get cvLogo(): string {
    return this._cvLogo;
  }
}
