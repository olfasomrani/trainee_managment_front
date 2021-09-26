import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiServer = "http://localhost:8080/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAdmins(): Observable <any[]> {
    return this.httpClient.get<[]>(this.apiServer + '/admins');
  }

  getEncadrants(): Observable <any[]> {
    return this.httpClient.get<any[]>(this.apiServer + '/encadrants');
  }

  getstagiaires(): Observable <any[]> {
    return this.httpClient.get<any[]>(this.apiServer + '/stagiaires');
  }
   deleteAdmin(id) {
   
    this.httpClient.delete(this.apiServer + '/admins/' + id).subscribe(data => {
      console.log(data);
      
    });
  }
  deleteStagiaires(id){
   
    this.httpClient.delete(this.apiServer + '/stagiaires/' + id).subscribe(data => {
      console.log(data);
      
    });
  }

  deleteEncadrant(id) {
   
    this.httpClient.delete(this.apiServer + '/encadrants/' + id).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    
    )
  }


}
