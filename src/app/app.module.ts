import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeaderComponent } from './components/hero/header/header.component';
import { MenuComponent } from './components/hero/header/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { HorseCardComponent } from './components/main/horse-card/horse-card.component';
import { HorseCardListComponent } from './components/main/horse-card-list/horse-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    MenuComponent,
    MainComponent,
    HorseCardComponent,
    HorseCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
