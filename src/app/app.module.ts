import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import { HorseSectionComponent } from './components/horse-section/horse-section.component';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';

import { HorseListComponent } from './components/horse-section/horse-list/horse-list.component';
import { AddHorseComponent } from './components/horse-section/add-horse/add-horse.component';
import { HorseCardComponent } from './components/horse-section/horse-list/horse-card/horse-card.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';

import { HorseService } from './services/horse.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';

import { HorseAppInterceptor } from './services/horse-app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomePageComponent,
    HorseSectionComponent,
    AboutUsSectionComponent,
    HorseListComponent,
    HorseCardComponent,
    AddHorseComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HorseService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HorseAppInterceptor,
      multi: true
    },
    UserService,
    UserStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
