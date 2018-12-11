import {Component, OnInit} from '@angular/core';
import {Skill} from "../../model/Skill";

@Component({
  selector: 'app-skills-page',
  templateUrl: 'skills-page.component.html',
  styleUrls: ['skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {

  public skills: Skill[];
  public colors: string[];
  private count: number;

  constructor() {
    this.count = 0;
    this.colors = [
      "#93A585",
      "#3D404E",
      "#654B51",
      "#5C8968",
      "#804B07",
      "#A8743A",
      "#648DA3",
      "#8B576F",
      "#21201C"
    ];
    this.skills = [
      {name: 'Java', score: '80%', color: this.getColor()},
      {name: 'Web', score: '40%', color: this.getColor()},
      {name: 'Cryptographie', score: '70%', color: this.getColor()},
      {name: 'Méthode Scrum', score: '10%', color: this.getColor()},
      {name: 'Documentation', score: '60%', color: this.getColor()},
      {name: 'Mobile', score: '30%', color: this.getColor()},
    ];
  }

  ngOnInit() {
  }

  getColor() {
    this.count++;
    return this.colors[this.count%this.colors.length]
  }

}
