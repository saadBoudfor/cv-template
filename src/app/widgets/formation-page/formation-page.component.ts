import {Component, OnInit, Input} from '@angular/core';
import {Formation} from "../../model/data/Formation";
import {Experience} from "../../model/data/Experience";

@Component({
  selector: 'app-formation-page',
  templateUrl: 'formation-page.component.html',
  styleUrls: ['formation-page.component.scss']
})
export class FormationPageComponent implements OnInit {
  @Input() formations: Formation[];
  @Input() image: string;

  constructor() {
  }

  ngOnInit() {
  }

  public get experiences(): Experience[] {
    return this.formations ? this.formationToExperience(this.formations) : [];
  }

  formationToExperience(formations: Formation[]): Experience[] {
    let experiences = [];
    formations.forEach((formation) => {
      experiences.push(new Experience(formation.name, formation.university, formation.year, formation.icon))
    });
    return experiences;
  }

}
