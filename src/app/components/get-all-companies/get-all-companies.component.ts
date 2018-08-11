import { Component, OnInit } from '@angular/core';
import { Company } from '../common/Company';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {

  public _companies : Company[] = []; 

  constructor(private _http:Http) { }

  
  ngOnInit() {
    var self = this;
    this._http.get('http://localhost:8080/AdminWS/getAllCompanies')
    .map(
      function (response)
      {
        return response.json();
      }
    ).subscribe(
      function(companies)
      {
        for(let c of companies)
        {
          console.log(c);
        }
        self._companies = companies;
      }
    )
  }
}


