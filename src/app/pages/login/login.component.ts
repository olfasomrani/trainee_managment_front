import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { ApiService } from '../../app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ItemsArray= [];
  data: Array<any>;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private restApiService: ApiService,
     public router: Router
  ) {
    this.form = this.fb.group({
      email: [''],
      password: [''],

  
    })
  }

  ngOnInit() {
  
  }




  submitForm(value: string,value2: string, type : string) {

    let acces:boolean = false;
       var  router: Router;

    var formData: any = new FormData();
    formData.append("email", value);
    formData.append("password", value2);

    if (type == "admin"){

      this.restApiService.getAdmins().subscribe((res: any[])=>{
        this.ItemsArray= res;
      }) 
      localStorage.setItem("role", "admin");

    }
    
    if (type == "encadrant"){
     

      this.restApiService.getEncadrants().subscribe((res: any[])=>{
        this.ItemsArray= res;
     
      }) 
      localStorage.setItem("role", "encadrant");
    }

    if (type == "stagiaire"){

      this.restApiService.getstagiaires().subscribe((res: any[])=>{
        this.ItemsArray= res;
      }) 
      localStorage.setItem("role", "stagiaire");
    }





  

    let evilResponseProps = Object.values(this.ItemsArray);

    console.log(evilResponseProps);
  
    for (var prop of this.ItemsArray) { 


    if (prop["email"] == formData.get("email") && prop["password"] == formData.get("password") ){
    acces = true;
    }
    }

      if (acces == true){
           alert("welcome  member!");

           localStorage.setItem('email', prop["email"]);
           localStorage.setItem('id', prop["id"]);
           localStorage.setItem('username', prop["username"]);

          
          this.router.navigate(['/home']);
          return false;

      }
      else{
        alert("invalid login or password");
      }

      return false;

   
    
}
  
  }