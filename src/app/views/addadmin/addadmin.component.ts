import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-addadmin',
    templateUrl: './addadmin.component.html',
    styleUrls: ['./addadmin.component.scss']
})
export class AddadminComponent implements OnInit {
 

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
    
      submitForm(value: string,value3: string , value4 : string) {
    
    
    const body = { userName: value,  email : value3, password : value4 }
    
    console.log(body);
        this.http.post('http://localhost:8080/api/admins', body , this.httpOptions).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        
        )
        alert("admin Ajouté");
        this.router.navigate(['/admin']);
        return false;
    
      }
      }