import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Company } from '../common/Company'

@Component({
  selector: 'app-remove-company',
  templateUrl: './remove-company.component.html',
  styleUrls: ['./remove-company.component.css']
})
export class RemoveCompanyComponent implements OnInit {

  public company : Company = new Company();
  public companytoremove:String;

  constructor(private _http:Http) { }

  ngOnInit() {
  }
  public removeCompany(){
  var url = 'http://localhost:8080/AdminWS/removeCompany/' + this.companytoremove;
  
    this._http.delete(url).subscribe(function(response)
{
  console.log(response);

});
  }
}

