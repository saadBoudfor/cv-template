import {Component, OnInit, Input} from '@angular/core';
import {Experience} from "../../model/Experience";

@Component({
  selector: 'app-experience-widget',
  templateUrl: 'experience-widget.component.html',
  styleUrls: ['experience-widget.component.scss']
})
export class ExperienceWidgetComponent implements OnInit {

  @Input() experiences: Experience[];
  @Input() image: string;

  constructor() {
  }

  ngOnInit() {
    console.log(this.experiences)
  }

}
