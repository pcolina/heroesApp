import { Component } from '@angular/core';

const nombre = 'Pedro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public user: any = {
    username: '',
    password: ''
  };


  public isMenuOpen!: boolean;

  constructor() {
    this.isMenuOpen = false;

  }

}
