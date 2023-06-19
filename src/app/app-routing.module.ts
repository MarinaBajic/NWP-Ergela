import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { HorseSectionComponent } from './components/horse-section/horse-section.component';
import { AddHorseComponent } from './components/horse-section/add-horse/add-horse.component';
import { authGuard } from './guards/auth.guard';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: HomePageComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'horses', component: HorseSectionComponent, canActivate: [authGuard] },
  { path: 'add-horse', component: AddHorseComponent, canActivate: [authGuard] },
  // { path: 'horse/:id', component: StockDetailsComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'ergela' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
