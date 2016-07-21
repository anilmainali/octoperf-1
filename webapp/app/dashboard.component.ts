import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import {AuthenticationService} from './authentication.service';


@Component({
  selector: 'my-dashboard',
  providers: [AuthenticationService],
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
  private router: Router,
  private heroService: HeroService,
  private authService: AuthenticationService) {}
  ngOnInit() {
    this.authService.checkCredentials();
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
    
  }
  gotoDetail(hero: Hero) {
  let link = ['HeroDetail', { id: hero.id }];
  this.router.navigate(link);
}

}

