import {Component, OnInit} from '@angular/core';
import { ApiService } from '../../app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    ItemsArray= [];
    nb1 = 0;
    nb2 = 0;
    nb3 = 0 ;
    
    constructor(private restApiService: ApiService,   public router: Router) { }

    ngOnInit() {

      


      this.restApiService.getEncadrants().subscribe((res: any[])=>{
        this.ItemsArray= res;
        this.nb2 = this.ItemsArray.length ;

      }) 
      
      this.restApiService.getstagiaires().subscribe((res: any[])=>{
        this.ItemsArray= res;
        this.nb3 = this.ItemsArray.length ;

      }) 

     
     
    }
  
    
  
    
  
  }
  