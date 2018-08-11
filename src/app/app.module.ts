import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { RemoveCompanyComponent } from './components/remove-company/remove-company.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { GetCompanyComponent } from './components/get-company/get-company.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { RemoveCustomerComponent } from './components/remove-customer/remove-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { GetCustomerComponent } from './components/get-customer/get-customer.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateCompanyComponent,
    RemoveCompanyComponent,
    UpdateCompanyComponent,
    GetCompanyComponent,
    GetAllCompaniesComponent,
    CreateCustomerComponent,
    RemoveCustomerComponent,
    UpdateCustomerComponent,
    GetCustomerComponent,
    GetAllCustomersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
        {
          path:'createCompany',
          component: CreateCompanyComponent
        },
        {
          path:'removeCompany',
          component: RemoveCompanyComponent
        },
        {
          path:'updateCompany',
          component: UpdateCompanyComponent
        },
        {
          path:'getCompany',
          component: GetCompanyComponent
        },
        {
          path:'getAllCompanies',
          component: GetAllCompaniesComponent
        },
        {
          path:'createCustomer',
          component: CreateCustomerComponent
        },
        {
          path:'removeCustomer',
          component: RemoveCustomerComponent
        },
        {
          path:'updateCustomer',
          component: UpdateCustomerComponent
        },
        {
          path:'getCustomer',
          component: GetCustomerComponent
        },
        {
          path:'getAllCustomers',
          component: GetAllCustomersComponent
        }




    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
