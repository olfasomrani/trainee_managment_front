import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/app.service';

@Component({
  selector: 'app-encadrant',
  templateUrl: './encadrant.component.html',
  styleUrls: ['./encadrant.component.scss']
})
export class EncadrantComponent implements OnInit {

  ItemsArray= [];
  constructor(private restApiService: ApiService,   public router: Router) { }

  ngOnInit() {
    this.restApiService.getEncadrants().subscribe((res: any[])=>{
      this.ItemsArray= res;
    })  
  }

  
  deleteEncadrant(id){
      this.restApiService.deleteEncadrant(id);
      alert("Encadrant supprimé");
        this.router.navigate(['/encadrants']);
        return false;
    
    }
  

}
