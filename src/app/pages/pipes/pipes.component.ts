import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public time: Observable<string>;
  public currencyNumber: number;
  public today: number;
  public pi: number;
  public jsonObject: { [key: string]: string };
  public message: string;
  public numMensajes: number;
  public language: string;

  constructor() {
    this.time = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
    this.currencyNumber = 0.259;
    this.today = Date.now();
    this.pi = 3.14159265359;
    this.jsonObject = {
      title: 'I´m a JSON! Look at me!',
      age: '???',
      objetive: 'Show me!'
    }
    this.message = 'Look at me!';
    this.numMensajes = 0;
    this.language = 'es';
  }

  ngOnInit() {
  }


  sumar(num: number) {
    this.numMensajes += num;
    this.numMensajes = this.numMensajes < 0 ? 0 : this.numMensajes;
  }

  cambioIdioma(len: string) {

    this.language = len;
  }
}
