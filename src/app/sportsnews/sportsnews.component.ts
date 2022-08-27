import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';


@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent implements OnInit {


  sportsDisplay:any=[];

  constructor( private services:NewsapiService) { }


  ngOnInit(): void {

this.services.sportsnews().subscribe((result)=>{
  console.log(result)
  this.sportsDisplay=result.articles
})

  }

}
