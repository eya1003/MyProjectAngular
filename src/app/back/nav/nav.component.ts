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

  goUniversite(){
    return this.route.url === '/universite/mainuniversite'
  }

  goToPartenaire(){
    return this.route.url === '/partenaire/mainpartenaire'
  }

  goToOffre(){
    return this.route.url === '/offre/mainoffre'
  }

}
