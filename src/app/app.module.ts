import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {HttpClientModule} from '@angular/common/http'

import {NewsapiService} from './service/newsapi.service';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TechnologyComponent } from './technology/technology.component'
@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    SportsnewsComponent,
    EntertainmentComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
