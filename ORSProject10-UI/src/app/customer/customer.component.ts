import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent extends BaseCtl {

   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
       super(locator.endpoints.ITEM, locator, route);
     }
     validate() {
       return this.validateForm(this.form.data);
     }
     validateForm(form) {
       let flag = true;
       let validator = this.serviceLocator.dataValidator;
       flag = flag && validator.isNotNullObject(form.clientName);
       console.log(form.clientName);
       flag = flag && validator.isNotNullObject(form.location);
      console.log(form.location);
       flag = flag && validator.isNotNullObject(form.contactNumber);
      console.log(form.contactNumber);
       flag = flag && validator.isNotNullObject(form.importance);
       console.log(form.importance);

       return flag;
     }
   
     populateForm(form, data) {
       form.id = data.id;
       form.clientName = data.clientName;
       form.location = data.location;
       form.contactNumber = data.contactNumber;
       form.importance = data.importance;
      
     }
     parseDate(dateString: string): Date {
      if (dateString) {
        return new Date(dateString);
      }
      return null;
    }
    test() {
  
    }

}
