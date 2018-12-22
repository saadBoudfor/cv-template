import {Component, OnInit} from '@angular/core';
import {Resume} from "../../model/data/Resume";
import {Widget} from "../../services/widget";
import {CvRouterService} from "../../services/cv-router.service";

@Component({
  selector: 'app-cv-content',
  templateUrl: 'cv-content.component.html',
  styleUrls: ['cv-content.component.scss']
})
export class CvContentComponent implements OnInit {

  public resume: Resume = new Resume();

  constructor(private $routerService: CvRouterService) {
  }

  getImage(name) {
    return Widget.get(name)
  }

  ngOnInit(): void {
    this.$routerService.Resume.subscribe(resume => {
      if (resume) {
        this.resume = resume;
      } else {
        this.$routerService.fetchData(this.$routerService.$locations.resume).subscribe((resume: Resume) => {
          this.$routerService.updateData(this.$routerService.$locations.resume, resume);
        })
      }
    })
  }
}
