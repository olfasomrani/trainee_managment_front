import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-encadrantdetails',
  templateUrl: './encadrantdetails.component.html',
  styleUrls: ['./encadrantdetails.component.scss']
})
export class EncadrantdetailsComponent implements OnInit {
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
   

   this.id= this.actRoute.snapshot.params.id;
 }
 
 ngOnInit() { 
 
  this.http.get<any[]>('http://localhost:8080/E/encadrants/'+ this.id, this.httpOptions).subscribe((res: any)=>{
    this.dataone= res;
    console.log(this.dataone);
  })  
  
}
}
