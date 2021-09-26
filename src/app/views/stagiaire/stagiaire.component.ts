import {Component, OnInit} from '@angular/core';
import { ApiService} from '../../app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-stagiaire',
    templateUrl: './stagiaire.component.html',
    styleUrls: ['./stagiaire.component.scss']
})
export class StagiaireComponent implements OnInit {
    ItemsArray= [];
    constructor(private restApiService: ApiService, 
        public router: Router,
        private actRoute: ActivatedRoute
        ) { }

    ngOnInit() {
      this.restApiService.getstagiaires().subscribe((res: any[])=>{
        this.ItemsArray= res;
      })  
    }
  
    
    deleteStagiaires(id){
        this.restApiService.deleteStagiaires(id);
        alert("delete with succes");
        this.router.navigate(['/stagiaires']);
       
      }
    
  
  }
  