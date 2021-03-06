import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from '../Service/hero.service';
import 'rxjs/add/operator/switchMap';
import { Hero } from '../hero';

@Component({
    moduleId: module.id,
    selector: 'hero-details',
    templateUrl: './hero-details.component.html',
    styleUrls: ['./hero-details.component.css']
})

export class HeroDetailComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    @Input() hero: Hero;

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void{
      this.heroService.update(this.hero)
        .then(() => this.goBack());
    }
}
