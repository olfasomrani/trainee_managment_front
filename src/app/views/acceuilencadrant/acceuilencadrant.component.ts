import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/app.service';

@Component({
  selector: 'app-acceuilencadrant',
  templateUrl: './acceuilencadrant.component.html',
  styleUrls: ['./acceuilencadrant.component.scss']
})
export class AcceuilencadrantComponent implements OnInit {
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


}
