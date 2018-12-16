import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CvHeaderComponent} from './widgets/cv-header/cv-header.component';
import {GardePageComponent} from './widgets/garde-page/garde-page.component';
import {DownButtonComponent} from './components/down-button/down-button.component';
import {DescriptionWidgetComponent} from './widgets/description-widget/description-widget.component';
import {ExperienceCardComponent} from './components/experience-card/experience-card.component';
import {ExperienceWidgetComponent} from './widgets/experience-widget/experience-widget.component';
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
import {RouterModule, Routes} from "@angular/router";
import {SkillsPageComponent} from './widgets/skills-page/skills-page.component';
import {TitleComponent} from './components/title/title.component';
import {ContactPageComponent} from './widgets/contact-page/contact-page.component';
import {InputComponent} from './components/input/input.component';
import {TextareaComponent} from './components/textarea/textarea.component';
import {ButtonComponent} from './components/button/button.component';
import {FooterComponent} from './widgets/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {FormationPageComponent} from './widgets/formation-page/formation-page.component';
import {ServiceComponent} from './components/service/service.component';
import {ServicePageComponent} from './widgets/service-page/service-page.component';
import {CardDetailComponent} from './widgets/card-detail/card-detail.component';
import {CvContentComponent} from './widgets/cv-content/cv-content.component';


const routes: Routes = [
  {path: '', component: CvContentComponent},
  {path: 'details/:id', component: CardDetailComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    CvHeaderComponent,
    GardePageComponent,
    DownButtonComponent,
    DescriptionWidgetComponent,
    ExperienceCardComponent,
    ExperienceWidgetComponent,
    ProgressBarComponent,
    SkillsPageComponent,
    TitleComponent,
    ContactPageComponent,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    FooterComponent,
    FormationPageComponent,
    ServiceComponent,
    ServicePageComponent,
    CardDetailComponent,
    CvContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
