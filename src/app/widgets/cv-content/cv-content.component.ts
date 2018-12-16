import {Component, OnInit, HostListener} from '@angular/core';
import {Resume} from "../../model/data/Resume";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Widget} from "../../services/widget";

@Component({
  selector: 'app-cv-content',
  templateUrl: 'cv-content.component.html',
  styleUrls: ['cv-content.component.scss']
})
export class CvContentComponent implements OnInit {


  public state: string = 'top';
  public resume: Resume = new Resume();

  constructor(private http: HttpClient) {
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

  private getConfig() {
    return this.http.get(environment.baseURL + '/data/cv-v1.json')
  }

  ngOnInit(): void {
    this.getConfig().subscribe((data: Resume) => this.resume = data);
  }
}
