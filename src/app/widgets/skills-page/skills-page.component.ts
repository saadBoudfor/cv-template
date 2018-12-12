import {Component, OnInit, Input} from '@angular/core';
import {Skill} from "../../model/Skill";

@Component({
  selector: 'app-skills-page',
  templateUrl: 'skills-page.component.html',
  styleUrls: ['skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {

  @Input() skills: Skill[];
  @Input() image: string;

  constructor() {
  }

  ngOnInit() {
  }

}
