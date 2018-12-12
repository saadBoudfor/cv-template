import {Component, HostListener, OnInit} from '@angular/core';
import {Resume} from "./model/Resume";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public state: string = 'top';
  public resume: Resume = new Resume();
  public images = {
    description: 'experience.jpeg',
    logo:  'b4-logo.png',
    skill:'skills.jpeg',
    linkedin: 'linkedin-sign.svg'
  };

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

  private getConfig() {
    return this.http.get(environment.baseURL + '/data/cv-v1.json')
  }

  private updateImagesUrl() {
    Object.keys(this.images).forEach((key) => {
      if(key) {
        this.images[key] = environment.imagesServerURL + '/photos/images/' + this.images[key];
      }
    });
  }

  ngOnInit(): void {
    this.updateImagesUrl();
    this.getConfig().subscribe((data: Resume) => this.resume = data);
  }

}
