import {Component, HostListener} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public state: string = 'top';

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.scrollY === 0) {
      this.state = 'top'
    } else {
      this.state = 'scrolling'
    }
  }
}
