import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./modules/about/about.component";
import {PortfolioComponent} from "./modules/portfolio/portfolio.component";
import {HomeComponent} from "./modules/home/home.component";
import {SkillsComponent} from "./modules/skills/skills.component";

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'skills',
    component:SkillsComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
