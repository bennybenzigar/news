import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }

  //newsapi url
  newsApiurls="https://newsapi.org/v2/top-headlines?country=in&apiKey=7d9a1dd696c544caabcb47ae67a65f3a"

  //sports url

  sportsurl=" https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=7d9a1dd696c544caabcb47ae67a65f3a"

  //entertainmenturl
  entertainmenturl="https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=7d9a1dd696c544caabcb47ae67a65f3a"

  
  technologyurl="https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=7d9a1dd696c544caabcb47ae67a65f3a"

  //topheding
topHeading():Observable<any>{
  return this.http.get(this.newsApiurls)
}



sportsnews():Observable<any>{
  return this.http.get(this.sportsurl)
}


entertainmentnews():Observable<any>{
 return this.http.get(this.entertainmenturl)
}


technologynews():Observable<any>{
  return this.http.get(this.technologyurl)
}
}
