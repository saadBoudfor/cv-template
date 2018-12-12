import { Component, OnInit } from '@angular/core';
import {Experience} from "../../model/Experience";

@Component({
  selector: 'app-experience-widget',
  templateUrl: 'experience-widget.component.html',
  styleUrls: ['experience-widget.component.scss']
})
export class ExperienceWidgetComponent implements OnInit {

  experiences: Experience[];

  constructor() { }

  ngOnInit() {
    this.experiences = [
      new Experience("Ingénieur de production", "Orange Bank", "Fevrier 2017 - Janvier 2018", "./assets/photos/Orange_Bank_2017.png"),
      new Experience("Développeur FrontEnd", "BCV", "Fevrier 2018 - Avril 2018", "./assets/photos/logo-bcv.jpg"),
      new Experience("Développeur FullStack", "Orange Bank", "Mai 2018 - Aujourd'hui", "./assets/photos/natixis.png"),
    ]
    console.log(JSON.stringify(this.experiences))
  }

}
