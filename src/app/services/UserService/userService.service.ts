import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000';

  existUser(user: string, pass: String): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}/users`).pipe(
      map(users => {
        const userExists = users.some((userObj: any) => userObj.user === user && userObj.pass === pass);
        return userExists;
      })
    );
  }
}
