import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.scss']
})
export class AdmindetailsComponent implements OnInit {
  id = 1;
  dataone;


 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
 } 



 constructor(
 
   private http: HttpClient,
   public router: Router,
   private actRoute: ActivatedRoute
 ) {
   

   this.id = this.actRoute.snapshot.params.id;
 }
 
 ngOnInit() { 
 
  this.http.get<any[]>('http://localhost:8080/api/admins/'+ this.id , this.httpOptions).subscribe((res: any)=>{
    this.dataone= res;
    console.log(this.dataone);
  })  
  
}



}
