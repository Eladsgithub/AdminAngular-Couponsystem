import { Component, OnInit } from '@angular/core';
import { Customer } from '../common/Customer';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  public _customers : Customer[] = [];

  constructor(private _http:Http) { }

  ngOnInit() {
    var self = this;
    this._http.get('http://localhost:8080/AdminWS/getAllCustomers').map(function(response)
    {
      return response.json();
    }
  ).subscribe(
    function(customers)
    {
      for(let c of customers)
      {
        console.log(c);
      }
      self._customers = customers;
    }
  )
}
}
