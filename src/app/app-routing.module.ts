import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { TechnologyComponent } from './technology/technology.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  { path:'',component:TopheadingComponent},
  { path:'sports',component:SportsnewsComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'technology', component:TechnologyComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
