import {Component, OnInit, Input} from '@angular/core';
import {Experience} from "../../model/Experience";

@Component({
  selector: 'app-experience-card',
  templateUrl: 'experience-card.component.html',
  styleUrls: ['experience-card.component.scss']
})

export class ExperienceCardComponent implements OnInit {

  @Input() experience: Experience;

  constructor() {
  }

  ngOnInit() {
  }

}
