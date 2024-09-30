import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url = 'http://localhost:3000/users'
  constructor(private httpClient:HttpClient) { }

  connexion(account:any){
      return this.httpClient.post<any>(`${this.url}/connexion`, account)
  }

  register(auth:any){
        return  this.httpClient.post<any>(`${this.url}/register`, auth);
  }
}
