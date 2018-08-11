import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Customer } from '../common/Customer'

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  public customer:Customer = new Customer();

  constructor(private _http:Http) { }
  
  ngOnInit() {
  }
  public createCustomer()
  {
    this._http.post('http://localhost:8080/AdminWS/createCustomer'
    ,this.customer).subscribe(function(response)
{
  console.log(response);

});
  }
}
