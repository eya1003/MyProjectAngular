import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceProfService } from 'src/app/Services/service-prof.service';
declare var google:any ;
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private service: ServiceProfService) { }

  
ngOnInit(): void {

}
}
