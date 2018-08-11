import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Company } from '../common/Company'

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  public company : Company = new Company();


  constructor(private _http:Http) { }

  ngOnInit() {
  }
  public updateCompany(){

    // var url = 'http://localhost:8080/AdminWS/updateCompany' ;
      this._http.put('http://localhost:8080/AdminWS/updateCompany' ,this.company).subscribe(function(response) 
      
  {
    console.log(response);
  
  });
    }
}
