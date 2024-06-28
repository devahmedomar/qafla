import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';
import { TrackComponent } from './pages/track/track.component';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { WeAreComponent } from './pages/we-are/we-are.component';
import { JionUSasCompanyComponent } from './pages/jion-usas-company/jion-usas-company.component';

const routes: Routes = [
  {
      path:'',
      component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'joinUs',
    component:JoinUsComponent
  },
  {
    path:'trainingLines',
    component:TrackComponent
  },
  {
    path:'trainer',
    component:TrainerComponent
  },
  {
    path:'courses',
    component:CoursesComponent
  },
  {
    path:'weare',
    component:WeAreComponent  
  },
  {
    path:'asCompany',
    component:JionUSasCompanyComponent
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
