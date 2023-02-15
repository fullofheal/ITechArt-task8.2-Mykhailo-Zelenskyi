import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  hero: Hero | undefined;
  private subscriptions: Subscription[] = [];
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((i) => i.unsubscribe());
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.subscriptions.push(
      this.heroService.getHero(id).subscribe((hero) => (this.hero = hero))
    );
  }

  goBack(): void {
    this.location.back();
  }
}
