import { Heroes } from 'src/app/interfaces/heroes';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  animations: [
    trigger('hoverAnimation', [
      state('hovered', style({
        transform: 'scale(1.1)',
      })),
      state('notHovered', style({
        transform: 'scale(1)',
      })),
      transition('notHovered <=> hovered', animate('200ms ease-in-out')),
    ]),
  ],
})
export class HeroesComponent implements OnInit {

  public heroesAll: Heroes[] = [];
  public hoverState = Array(this.heroesAll.length).fill('unhoverd');

  constructor(public readonly heroesService: HeroesService) { }

  ngOnInit() {

    this.heroesService.getHeroes().subscribe(
      result => {
        this.heroesAll = result;
      }
    )

  }

  onMouseEnter(idx: number) {
    this.hoverState[idx] = 'hovered';
  }
  onMouseLeave(idx: number) {
    this.hoverState[idx] = 'unhovered';
  }
}
