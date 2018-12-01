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


@NgModule({
  declarations: [
    AppComponent,
    CvHeaderComponent,
    GardePageComponent,
    DownButtonComponent,
    DescriptionWidgetComponent,
    ExperienceCardComponent,
    ExperienceWidgetComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
