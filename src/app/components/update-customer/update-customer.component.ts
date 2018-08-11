import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Customer } from '../common/Customer'


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  
  public customer : Customer = new Customer();


  constructor(private _http:Http) { }

  ngOnInit() {
  }
  public updateCustomer(){

    
      this._http.put('http://localhost:8080/AdminWS/updateCustomer' ,this.customer).subscribe(function(response) 
      
  {
    // this.customer = response;
    console.log(response);
  
  });
    }

}
