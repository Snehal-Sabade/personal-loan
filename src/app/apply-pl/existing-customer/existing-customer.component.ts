import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-existing-customer',
  templateUrl: './existing-customer.component.html',
  styleUrls: ['./existing-customer.component.scss']
})
export class ExistingCustomerComponent implements OnInit {

  constructor() { }
  emailForm:any;
  PhoneNumber!:number;
  matcher:any;
  ngOnInit(): void {
    let MOBILE_PATTERN = /[0-9\+\-\ ]/;

    this.emailForm = new FormGroup({
      PhoneNumber:new FormControl('',[Validators.pattern(MOBILE_PATTERN)])
    });

  }

}
