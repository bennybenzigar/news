import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  entertainmentDisplay:any=[];
  constructor(private services: NewsapiService) { }

  ngOnInit(): void {

    this.services.entertainmentnews().subscribe((result)=>{
      console.log(result);
      this.entertainmentDisplay=result.articles
    })
  }

}
