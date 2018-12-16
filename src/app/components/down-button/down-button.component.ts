import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-down-button',
  templateUrl: 'down-button.component.html',
  styleUrls: ['down-button.component.scss']
})
export class DownButtonComponent {
  @Input() id: string;

  scrollToElement(elementID) {
    const $element = <any>document.getElementById(elementID);
    $element.scrollIntoView({ block: 'start',  behavior: 'smooth' })
  }
}
