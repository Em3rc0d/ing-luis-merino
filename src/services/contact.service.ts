import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Contact {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://backend-task-m.vercel.app/api'; // URL base de tu backend

  constructor(private http: HttpClient) {}

  // Obtener todos los contactos
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/contacts`);
  }

  // Guardar un nuevo contacto
  saveContact(contact: Contact): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/contact`, contact, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
