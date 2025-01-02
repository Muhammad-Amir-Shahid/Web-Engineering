import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Ensures this service is available application-wide
})
export class ApiService {
  private baseUrl = 'http://localhost:3600/api';

  constructor(private http: HttpClient) {}

  // Signup API call
  signup(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

  // Login API call
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}
