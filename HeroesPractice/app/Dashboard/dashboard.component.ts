import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from '../Hero/hero';
import { HeroService } from '../Hero/Service/hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];

    constructor(private HeroService: HeroService){}

    ngOnInit(): void{
        this.HeroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }
 }
