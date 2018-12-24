import {Component, Input, EventEmitter, Output, OnInit} from '@angular/core';
import {CvRouterService} from "../../services/cv-router.service";

@Component({
  selector: 'app-cv-header',
  templateUrl: 'cv-header.component.html',
  styleUrls: ['cv-header.component.scss']
})
export class CvHeaderComponent implements OnInit {
  private _option: HeaderOption;
  private _onMenuClick = new EventEmitter<MouseEvent>();
  public menuIsClicked: boolean = false;
  public back: boolean = false;

  constructor(private $routerService: CvRouterService) {
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

  public toggleMenu() {
    this.menuIsClicked = !this.menuIsClicked;
    this.$routerService.$showMenu.next(this.menuIsClicked);
  }

  ngOnInit(): void {
    this.$routerService.Currentlocation.subscribe(location => {
      this.back = !(location === this.$routerService.$locations.resume);
    })
  }

  backClicked() {
    this.$routerService.Currentlocation.next(this.$routerService.$locations.resume);
  }
}
