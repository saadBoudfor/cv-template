import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cv-header',
  templateUrl: 'cv-header.component.html',
  styleUrls: ['cv-header.component.scss']
})
export class CvHeaderComponent {
  private _option: HeaderOption;
  private _onMenuClick = new EventEmitter<MouseEvent>();
  public menuIsClicked: boolean = false;

  @Output()
  get onMenuClick(): EventEmitter<MouseEvent> {
    return this._onMenuClick;
  }

  set onMenuClick(value: EventEmitter<MouseEvent>) {
    this._onMenuClick = value;
  }
  get option(): HeaderOption {
    return this._option;
  }

  @Input()
  set option(value: HeaderOption) {
    this._option = value;
  }

  public toggleMenu(event: MouseEvent) {
    this.menuIsClicked = !this.menuIsClicked;
    this._onMenuClick.emit(event);
  }
}
