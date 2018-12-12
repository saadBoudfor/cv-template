import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CvHeaderComponent } from './widgets/cv-header/cv-header.component';
import { GardePageComponent } from './widgets/garde-page/garde-page.component';
import { DownButtonComponent } from './components/down-button/down-button.component';
import { DescriptionWidgetComponent } from './widgets/description-widget/description-widget.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { ExperienceWidgetComponent } from './widgets/experience-widget/experience-widget.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import {RouterModule, Routes} from "@angular/router";
import { SkillsPageComponent } from './widgets/skills-page/skills-page.component';
import { TitleComponent } from './components/title/title.component';
import { ContactPageComponent } from './widgets/contact-page/contact-page.component';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './widgets/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [];


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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
