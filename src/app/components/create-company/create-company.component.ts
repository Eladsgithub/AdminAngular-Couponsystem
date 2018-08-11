import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Company } from '../common/Company'
@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {


  public company:Company = new Company();

  constructor(private _http:Http) { }

  ngOnInit() {
  }

  public createCompany()
  {
    this._http.post('http://localhost:8080/AdminWS/createCompany'
    ,this.company).subscribe(function(response)
{
  console.log(response);

});
  }
}
