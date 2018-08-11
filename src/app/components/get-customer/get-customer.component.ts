import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Customer } from '../common/Customer'
@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {

  public _customer : Customer = new Customer();
  public id : number;

  constructor(private _http:Http) { }


  
  ngOnInit() {
  }
 public getCustomer(){
  var self = this;
  this._http.get('http://localhost:8080/AdminWS/getCustomer/' + this.id).map(
    function (customerresponse)
      {
        return customerresponse.json();
      }
    ).subscribe(
      function(customer)
      {
        self._customer = customer;
      }
    )}
    }