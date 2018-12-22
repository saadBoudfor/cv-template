import {Component, HostListener, OnInit} from '@angular/core';
import {Widget} from "./services/widget";
import {CvRouterService} from "./services/cv-router.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public state: string = 'top';
  public showDetails: boolean = false;

  constructor(private $routerService: CvRouterService) {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.scrollY === 0) {
      this.state = 'top'
    } else {
      this.state = 'scrolling'
    }
  }

  getImage(name) {
    return Widget.get(name)
  }

  ngOnInit(): void {
    this.$routerService.Currentlocation.subscribe(location => {
      if (location !== this.$routerService.$locations.resume) {
        this.showDetails = true;
      }
    })
  }

}
