import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-addencadrant',
    templateUrl: './addencadrant.component.html',
    styleUrls: ['./addencadrant.component.scss']
})
export class AddEncadrantComponent implements OnInit {
 

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
  
    
    
      submitForm(value: string,value2: string, value3 : string , value4 : string ) {
  
    
        const body = { userName: value,  email :value2, password :value3, tel: value4}
    
    console.log(body);
        this.http.post('http://localhost:8080/api/encadrants', body , this.httpOptions).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        
        )
        alert("Encadrant ajouté avec succée");
        this.router.navigate(['/encadrants']);
        return false;
    
      }
      }