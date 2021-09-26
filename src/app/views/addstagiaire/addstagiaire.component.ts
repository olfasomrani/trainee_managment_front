import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-addstagiaire',
    templateUrl: './addstagiaire.component.html',
    styleUrls: ['./addstagiaire.component.scss']
})
export class AddStagiaireComponent implements OnInit {
 

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      } 
    
  
    
      constructor(
        private http: HttpClient,
        public router: Router
      ) {
        
      }
    
      ngOnInit() { }
    
  
      submitForm(value: string,value2: string , value3 : string, value4:string) {
    
    
    const body = { userName: value,  email :value2, password :value3, cin: value4}
    
    console.log(body);
        this.http.post('http://localhost:8080/api/stagiaires', body , this.httpOptions).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        
        )
        alert("stagiaire ajouté avec succés");
        this.router.navigate(['/stagiaires']);
        return false;
    
      }
      }