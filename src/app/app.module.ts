import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DepartementsComponent } from './departements/departements.component';
import { HistoryComponent } from './history/history.component';
import { ItDepartementComponent } from './it-departement/it-departement.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ConclutionComponent } from './conclution/conclution.component';
import { FooterComponent } from './footer/footer.component';
import { PCBComponent } from './pcb/pcb.component';
import { ActivitiesWhiteComponent } from './activities-white/activities-white.component';
import { CircleAnimationComponent } from './circle-animation/circle-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    IntroSectionComponent,
    NavBarComponent,
    DepartementsComponent,
    HistoryComponent,
    ItDepartementComponent,
    ActivitiesComponent,
    ConclutionComponent,
    FooterComponent,
    PCBComponent,
    ActivitiesWhiteComponent,
    CircleAnimationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
