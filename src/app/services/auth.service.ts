import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  isAuth(token: string) {
    return this.http
      .get<any>(`${this.apiUrl}/is-auth?token=${token}`)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          window.location.replace('https://is-auth-main.netlify.app/login');
        }
      );
  }
}
