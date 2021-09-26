import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-updatestagiaire',
  templateUrl: './updatestagiaire.component.html',
  styleUrls: ['./updatestagiaire.component.scss']
})
export class UpdatestagiaireComponent implements OnInit {

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

    this.http.get<any[]>('http://localhost:8080/api/stagiaires/' + this.id, this.httpOptions).subscribe((res: any) => {
      this.dataone = res;
      console.log(this.dataone);
    })

  }

  submitForm(value: string, value2: string, value3: string,value4:string) {

    const body = { userName: value, email: value2, password: value3 , cin:value4 }

    console.log(body);
    this.http.put('http://localhost:8080/api/stagiaires/' + this.id, body, this.httpOptions).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)

    )
    alert("stagiaire updated");
    this.router.navigate(['/stagiaires']);
    return false;

  }
}
