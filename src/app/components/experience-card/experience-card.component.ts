import {Component, OnInit, Input} from '@angular/core';
import {Experience} from "../../model/data/Experience";
import {CvRouterService} from "../../services/cv-router.service";

@Component({
  selector: 'app-experience-card',
  templateUrl: 'experience-card.component.html',
  styleUrls: ['experience-card.component.scss']
})

export class ExperienceCardComponent implements OnInit {

  @Input() experience: Experience;

  constructor(private $routerService: CvRouterService) {
  }

  ngOnInit() {
  }

  showDetails() {
    this.$routerService.updateLocation(this.$routerService.$locations.experience);
  }
}
