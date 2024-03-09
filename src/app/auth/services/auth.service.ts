import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interfaces';
import { Observable, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private baseUrl = environment.baseUrl;
  private user?: User;
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient,
    private router: Router) { }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return { ...this.user };
  }

  login(userText: string, passText: string): Observable<User | undefined> {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      map(users => {
        const user: User | undefined = users.find(userObj => userObj.user === userText && userObj.pass === passText);

        if (!!user) {
          this.user = user;
          localStorage.setItem('user', JSON.stringify(user));
        }

        return this.user || undefined;
      })
    );
  }

  checkAuthentification(): boolean {
    const aux = localStorage.getItem('user');

    if (!!aux) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }

  logout() {

    this.user = undefined;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
