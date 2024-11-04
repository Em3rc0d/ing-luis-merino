import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'pub_58144e4ac921767d4d538d675511cea147935'; // Reemplaza con tu API Key
  private apiUrl = 'https://newsdata.io/api/1/news';

  constructor(private http: HttpClient) { }

  getMarineNews(): Observable<any> {
    const query = 'marina OR naval OR "noticias marinas"';
    const country = 'PE';
    const url = `${this.apiUrl}?apikey=${this.apiKey}&q=${query}&country=${country}`;

    return this.http.get(url);
  }
}
