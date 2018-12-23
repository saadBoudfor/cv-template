import {Component, HostListener, OnInit} from '@angular/core';
import {Widget} from "./services/widget";
import {CvRouterService} from "./services/cv-router.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public headerOption: HeaderOption = {
    state: 'hide',
    logo: Widget.get('header').image,
    back: true
  };
  public showDetails: boolean = false;

  constructor(private $routerService: CvRouterService) {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.headerOption.state = 'show';
    if (!this.showDetails) {
      this.headerOption.state = (window.scrollY === 0)?'hide': 'show';
    }
  }

  getImage(name) {
    return Widget.get(name)
  }

  ngOnInit(): void {
    this.$routerService.Currentlocation.subscribe(location => {
      this.showDetails = location !== this.$routerService.$locations.resume;
    })
  }

}
