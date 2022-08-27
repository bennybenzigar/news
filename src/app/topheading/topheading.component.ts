import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  //to display data
topHeadingDiplay:any=[];
  constructor( private services: NewsapiService) { }

  ngOnInit(): void {

    this.services.topHeading().subscribe((result)=>{
      console.log(result);
      this.topHeadingDiplay=result.articles;

    })
    
   
  }

}
