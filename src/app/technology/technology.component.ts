import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {


  constructor(private services : NewsapiService) { }
technologyDisplay:any=[];
  ngOnInit(): void {

    this.services.technologynews().subscribe((result)=>{
      console.log(result);
      this.technologyDisplay=result.articles
    })
  }

}
