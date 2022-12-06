import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  goToDepartement(){
    return this.route.url === '/departement/mainDepartement'
  }

  goToProfesseur(){
    return this.route.url === '/professeur/mainProfesseur'
  }


}
