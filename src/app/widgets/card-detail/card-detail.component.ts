import {Component, OnInit, Input} from '@angular/core';
import {Widget} from "../../services/widget";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Experience} from "../../model/data/Experience";
import {ExperienceDetails} from "../../model/data/experience-details";

@Component({
  selector: 'app-card-detail',
  templateUrl: 'card-detail.component.html',
  styleUrls: ['card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  public objectKeys = Object.keys;

  public experience: Experience = {
    job: "Développement /Conception d'applications mobiles hybrides.",
    company: 'Laboratoires Genevrier',
    period: 'avril 2016 - Septembre 2016 (6 mois)',
    img: 'http://127.0.0.1:8887/photos/boudfor/experiences/Orange_Bank_2017.png',
  };

  public experienceDetails: any = {
    specification: 'MVC.Net',
    language: 'technologies web (JavaScript, CSS, HTML), Cordova, C# (OData, LinQ, Entity Framework)',
    methodology: 'Agile (SCRUM), UML',
    svn: 'Git, TFS',
    database: 'SQL Server'
  };

  public purposes: string[] = [
    'Recueillir les besoins internes et définir des User Stories SCRUM.',
    'Concevoir et développer des applications mobiles.',
    'Tester les applications sur les différents supports (iPad, tablette Windows 10, PC traditionnels).',
    'Rédiger les documents projets nécessaires(tutoriels, supports papier).',
    'Participer aux réunions de démonstration auprès des utilisateurs clés.'
  ];

  constructor(private route: ActivatedRoute, private navigator: Router) {
  }

  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id)
  }

  getImage(name) {
    return Widget.get(name)
  }

  goToHome() {
    const promess = this.navigator.navigateByUrl('/')
  }
}
