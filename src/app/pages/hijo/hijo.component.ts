import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HijoComponent implements OnInit {

  public heroesSelected: string[] = [];
  public heroes: string[] = [
    'Superman',
    'Batman',
    'Spiderman',
    'Wonder Woman',
    'Iron Man',
    'Captain America',
    'Thor',
    'Black Widow',
    'Hulk',
    'Flash',
    'Green Lantern',
    'Aquaman',
    'Black Panther',
    'Doctor Strange',
    'Wolverine',
    'Deadpool',
    'Green Arrow',
    'Ant-Man',
    'Captain Marvel',
    'Hawkeye'
  ];
  public heroesText: string = 'Heroes';
  private _numHeroes: number = 0;

  @Input() nombre: string = 'anonimno';
  @Input() set numHeroes(value: number) {
    if (this._numHeroes !== value) {
      this._numHeroes = value;
      this.selectSuperHeroFree();
    }
  }
  @Input() numRender: number = 0;

  @Output() salida: EventEmitter<number> = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {


    setTimeout(() => {
      this.numHeroes = 5;
      //this.cdr.markForCheck();
    }, 2000);
  }

  ngDoCheck() {
    // Incrementa el contador cada vez que se inicia la detección de cambios
    this.numRender++;
    console.log(this.numRender);
  }

  ngAfterViewChecked() {
    console.log('componente renderizado2');
  }

  devolver() {


    this.salida.emit(this.heroesSelected.length);
  }

  selectSuperHeroFree() {
    if (this._numHeroes > this.heroesSelected.length) {
      const availableHeroes = this.heroes.filter(hero => !this.heroesSelected.includes(hero));
      const newHero = availableHeroes[Math.floor(Math.random() * availableHeroes.length)];

      if (newHero) {
        this.heroesSelected.push(newHero);
      }
    }
    if (this._numHeroes < this.heroesSelected.length) {
      this.heroesSelected.pop();
    }
  }

}
// Generated by https://quicktype.io


