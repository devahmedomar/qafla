import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { RoadmapsComponent } from './sections/roadmaps/roadmaps.component';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { FooterComponent } from './sections/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { AccordionModule } from 'primeng/accordion';
import { ArticlesComponent } from './sections/articles/articles.component';
import { FormComponent } from './sections/form/form.component';
import { StudentOpinionComponent } from './sections/student-opinion/student-opinion.component';
import { TopRatedComponent } from './sections/top-rated/top-rated.component';
import { SilderComponent } from './sections/silder/silder.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { ArticlesPagePreviewComponent } from './pages/articles-page-preview/articles-page-preview.component';
import { UsagePolicyComponent } from './pages/usage-policy/usage-policy.component';
import { TeamComponent } from './pages/team/team.component';
import { LicensesComponent } from './pages/licenses/licenses.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RoadmapsComponent,
    NavbarComponent,
    FooterComponent,
    ArticlesComponent,
    FormComponent,
    StudentOpinionComponent,
    TopRatedComponent,
    SilderComponent,
    ArticlesPageComponent,
    ArticlesPagePreviewComponent,
    UsagePolicyComponent,
    TeamComponent,
    LicensesComponent,
    DocumentationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
