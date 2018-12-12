import {Component, HostListener} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public state: string = 'top';

  public description = {
    profileImage: 'http://127.0.0.1:8887/boudfor/profile.png',
    resume: "Diplômé d'un master 2 DAPM (Développement et Applications sur Plateformes Mobiles) à la faculté des sciences et techniques de La Garde, j’exerce actuellement le métier d’ingénieur d'études et de développement au sein du Groupe Capgemini. Je possède un master en cryptologie et j'ai déjà effectué un stage R&D, à l’institut Télécom-Bretagne sur la sécurité des bases de données relationnelles. J’apprécie particulièrement le langage Java et tout ce qui tourne autour (Android, JavaEE, Java Card ...) ainsi que les technologies web."
  };

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.scrollY === 0) {
      this.state = 'top'
    } else {
      this.state = 'scrolling'
    }
  }
}
