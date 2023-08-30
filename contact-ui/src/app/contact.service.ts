import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private backendUrl="htttp://localhost:8080/";
  //back end Url 

  constructor(private HttpClient:HttpClient) { }
  // you need to  import http client & let me configure import using back end url 

  createCpontact()
}
