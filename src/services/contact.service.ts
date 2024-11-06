import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://back-ing-lm.vercel.app/api/contact';

  constructor(private http: HttpClient) {}

  saveContact(contactData: { name: string; email: string; phone: string; message: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, contactData);
  }
}
