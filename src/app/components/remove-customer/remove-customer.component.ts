import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Customer } from '../common/Customer'


@Component({
  selector: 'app-remove-customer',
  templateUrl: './remove-customer.component.html',
  styleUrls: ['./remove-customer.component.css']
})
export class RemoveCustomerComponent implements OnInit {

  public customer : Customer = new Customer();
  public customertoremove : String;

  constructor(private _http:Http) { }

  ngOnInit() {
  }
  public removeCustomer(){
    var url = 'http://localhost:8080/AdminWS/removeCustomer/' + this.customertoremove;
    
      this._http.delete(url).subscribe(function(response)
  {
    console.log(response);
  
  });
    }
}
