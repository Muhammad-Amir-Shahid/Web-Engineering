import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Provides the service globally
})
export class AuthService {
  private serverUrl = 'http://localhost:7000/login'; // Replace with your server's login endpoint

  constructor(private http: HttpClient) {}

  // Function to send login credentials to the server
  login(username: string, password: string): Observable<any> {
    const payload = { username, password };
    return this.http.post(this.serverUrl, payload); // Sends POST request to the server
  }
}
