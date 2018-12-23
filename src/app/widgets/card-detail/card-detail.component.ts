import {Component, OnInit} from '@angular/core';
import {Experience} from "../../model/data/Experience";
import {CvRouterService} from "../../services/cv-router.service";

@Component({
  selector: 'app-card-detail',
  templateUrl: 'card-detail.component.html',
  styleUrls: ['card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  constructor(private $routerService: CvRouterService) {

  }

  public objectKeys = Object.keys;

  public experience: Experience = {
    job: "Développement /Conception d'applications mobiles hybrides.",
    company: 'Laboratoires Genevrier',
    period: 'avril 2016 - Septembre 2016 (6 mois)',
    img: 'http://176.142.246.203:9000/api/photos/boudfor/experiences/Orange_Bank_2017.png',
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

  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

  ngOnInit() {
  }

  goToHome() {
    this.$routerService.updateLocation(this.$routerService.$locations.resume);
  }
}
