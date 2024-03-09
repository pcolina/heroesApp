import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroes } from '../interfaces/heroes';
import { Observable } from 'rxjs';

const url = "http://localhost:3000/heroes"

@Injectable({
  providedIn: 'root'
})


export class HeroesService {



  constructor(private http: HttpClient) { }

  public getHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(url);

  }
}
