import {Component, OnInit, Input} from '@angular/core';
import {Experience} from "../../model/data/Experience";
import {Router} from "@angular/router";

@Component({
  selector: 'app-experience-card',
  templateUrl: 'experience-card.component.html',
  styleUrls: ['experience-card.component.scss']
})

export class ExperienceCardComponent implements OnInit {

  @Input() experience: Experience;

  constructor(private navigator: Router) {
  }

  ngOnInit() {
  }

  goTo() {
    const promess = this.navigator.navigateByUrl('/details/12')
  }
}
