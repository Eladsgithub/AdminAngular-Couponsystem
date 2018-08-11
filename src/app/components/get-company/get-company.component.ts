import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Company } from '../common/Company'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.css']
})
export class GetCompanyComponent implements OnInit {
  public _company : Company;
  public compName : String;


  constructor(private _http:Http) { }


  ngOnInit() {
  }

  public getCompany()
  {
    var self = this;
    this._http.get('http://localhost:8080/AdminWS/getCompany/' + this.compName)
    .map(
    function (companyresponse)
      {
        return companyresponse.json();
      }
    ).subscribe(
      function(company)
      {
        self._company = company;
      }
    )}
    }
    