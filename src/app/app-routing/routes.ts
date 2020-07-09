import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { MainComponent } from '../main/main.component';

export const allroutes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent }, 
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'contact', component: ContactComponent }
  ];