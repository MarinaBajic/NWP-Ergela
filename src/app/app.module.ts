import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeroComponent } from './components/hero/hero.component';
import { HeaderComponent } from './components/hero/header/header.component';
import { MenuComponent } from './components/hero/header/menu/menu.component';

import { MainComponent } from './components/main/main.component';
import { HorseSectionComponent } from './components/main/horse-section/horse-section.component';
import { HorseListComponent } from './components/main/horse-section/horse-list/horse-list.component';
import { AddHorseComponent } from './components/main/horse-section/add-horse/add-horse.component';
import { HorseCardComponent } from './components/main/horse-section/horse-list/horse-card/horse-card.component';
import { HorseService } from './services/horse.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    MenuComponent,
    MainComponent,
    HorseSectionComponent,
    HorseListComponent,
    HorseCardComponent,
    AddHorseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    // AppRoutingModule
  ],
  providers: [
    HorseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
