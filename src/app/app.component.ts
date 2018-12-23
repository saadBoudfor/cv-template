import {Component, HostListener, OnInit} from '@angular/core';
import {Widget} from "./services/widget";
import {CvRouterService} from "./services/cv-router.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public content: string = 'content';
  public headerOption: HeaderOption = {
    state: 'hide',
    logo: Widget.get('header').image,
    back: this.content === 'content'
  };

  constructor(private $routerService: CvRouterService) {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.headerOption.state = 'show';
    if (this.content === 'content') {
      this.headerOption.state = (window.scrollY === 0) ? 'hide' : 'show';
    }
  }

  getImage(name) {
    return Widget.get(name)
  }

  ngOnInit(): void {
    this.$routerService.Currentlocation.subscribe(location => {
      switch (location) {
        case this.$routerService.$locations.resume:
          this.content = 'content';
          break;
        case this.$routerService.$locations.experience:
          this.content = 'details';
          break;
        case this.$routerService.$locations.menu:
          this.content = 'menu';
          break;
        default:
          this.content = 'content'
      }
    })
  }

  onMenuClick() {
    if (this.$routerService.Currentlocation.getValue() === this.$routerService.$locations.resume) {
      this.$routerService.updateLocation(this.$routerService.$locations.menu);
    } else {
      this.$routerService.updateLocation(this.$routerService.$locations.resume);
    }
  }
}
