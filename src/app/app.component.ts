import {Component, HostListener, OnInit} from '@angular/core';
import {Widget} from "./services/widget";
import {CvRouterService} from "./services/cv-router.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public contentTab: string = 'section1';
  public menuTab: string = 'section1';
  public headerOption: HeaderOption = {
    state: 'hide',
    logo: Widget.get('header').image
  };

  constructor(private $routerService: CvRouterService) {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.headerOption.state = 'show';
    this.$routerService.Currentlocation.subscribe(location => {
      if ( location === this.$routerService.$locations.resume) {
        this.headerOption.state = (window.scrollY === 0) ? 'hide' : 'show';
      }
    });
  }

  getImage(name) {
    return Widget.get(name)
  }

  ngOnInit(): void {
    this.$routerService.Currentlocation.subscribe(location => {
      switch (location) {
        case this.$routerService.$locations.resume:
          this.contentTab = 'section1';
          break;
        case this.$routerService.$locations.experience:
          this.contentTab = 'section2';
          break;
        default:
          this.contentTab = 'section1'
      }
    });
    this.$routerService.$showMenu.subscribe(showMenu => this.menuTab = showMenu? 'section2': 'section1')
  }
}
