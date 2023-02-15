import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Subscription } from 'rxjs';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  private subscriptions: Subscription[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((i) => i.unsubscribe());
  }

  getHeroes(): void {
    this.subscriptions.push(
      this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes))
    );
  }
}
