import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'aqui la url de la api ctm';

  constructor(private http: HttpClient) {}

  agregar(username: string) {
    const url = `${this.baseUrl}/agregar`;
    const body = { username };
    return this.http.post(url, body);
  }
}