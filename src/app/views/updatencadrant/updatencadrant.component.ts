import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatencadrant',
  templateUrl: './updatencadrant.component.html',
  styleUrls: ['./updatencadrant.component.scss']
})
export class UpdatencadrantComponent implements OnInit {

 
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

    this.http.get<any[]>('http://localhost:8080/api/encadrants/' + this.id, this.httpOptions).subscribe((res: any) => {
      this.dataone = res;
      console.log(this.dataone);
    })

  }

  submitForm(value: string, value2: string, value3: string,value4:string) {

    const body = { userName: value, email: value2, password: value3 , tel:value4 }

    console.log(body);
    this.http.put('http://localhost:8080/api/encadrants/' + this.id, body, this.httpOptions).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)

    )
    alert("Encadrant modifié");
    this.router.navigate(['/encadrants']);
    return false;

  }

}
