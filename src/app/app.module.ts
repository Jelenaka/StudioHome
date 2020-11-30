import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule, ClrAccordionModule } from "@clr/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimationComponent } from './portfolio/animation/animation.component';
import { VideogamesComponent } from './portfolio/videogames/videogames.component';
import { CommercialComponent } from './portfolio/commercial/commercial.component';
import { ElearningComponent } from './portfolio/elearning/elearning.component';
import { LocutionComponent } from './portfolio/locution/locution.component';
import { FooterAppComponent } from './footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutMeComponent,
    HomeComponent,
    ContactComponent,
    AnimationComponent,
    VideogamesComponent,
    CommercialComponent,
    ElearningComponent,
    LocutionComponent,
    FooterAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClrAccordionModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent, FooterAppComponent]
})
export class AppModule { }
