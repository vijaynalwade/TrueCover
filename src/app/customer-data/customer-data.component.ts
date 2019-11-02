import { Component } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent {

  registerForm= new FormGroup({
 
    Name: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    EmployeeId: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    Designation: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    Department: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    Phoneno: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern(/^[6-9]\d{9}$/)]),
    EmailId: new FormControl('',[Validators.required,Validators.pattern(/[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/)]),
    Address: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(30)]),
    Pincode: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)])
    
  })

  get Name(){
    return this.registerForm.get('Name');
  }
  get EmployeeId(){
    return this.registerForm.get('EmployeeId');
  }
  get Designation(){
    return this.registerForm.get('Designation');
  }
  get Department(){
    return this.registerForm.get('Department');
  }
  get Phoneno(){
    return this.registerForm.get('Phoneno');
  }
  get EmailId(){
    return this.registerForm.get('EmailId');
  }
  get Address(){
    return this.registerForm.get('Address');
  }
  get Pincode(){
    return this.registerForm.get('Pincode');
  }
}
