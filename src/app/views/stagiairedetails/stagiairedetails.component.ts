import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-stagiairedetails',
  templateUrl: './stagiairedetails.component.html',
  styleUrls: ['./stagiairedetails.component.scss']
})
export class StagiairedetailsComponent implements OnInit {
  id_stagiaire = 1;
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
   

   this.id_stagiaire= this.actRoute.snapshot.params.id_stagiaire;
 }
 
 ngOnInit() { 
 
  this.http.get<any[]>('http://localhost:8080/api/stagiaires/'+ this.id_stagiaire, this.httpOptions).subscribe((res: any)=>{
    this.dataone= res;
    console.log(this.dataone);
  })  
  
}
}