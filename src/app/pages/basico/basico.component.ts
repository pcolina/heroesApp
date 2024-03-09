import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.css']
})
export class BasicoComponent {
  public title = 'Bienvenidos a la aplicación de Heroes';
  public salida = 0;

  numHeroes = 0;

  saludar() {
    return "Hola Heroes"
  }

  get nombre() {
    return "Pedro"
  }

  sumar(): number {
    return this.numHeroes += 1
  }
  restar(): number {
    return this.numHeroes -= 1
  }

  pintarResultado(texto: number) {
    this.salida = texto
  }
}
