import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ 
  providedIn: 'root'
})
export class ContactService {

  private restUrl = 'http://localhost:8080/contact';

  constructor(private httpClient:HttpClient) { }



  createContact(contact:Contact):Observable<string>
  {
return this.httpClient.post(this.restUrl,contact,{responseType: 'text'});

  } 
}
