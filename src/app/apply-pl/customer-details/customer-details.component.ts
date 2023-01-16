import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})

export class CustomerDetailsComponent implements OnInit {
  selectedFW = new FormControl();
  employement = [
    {
      id: 1,
      text: "salaried",
    },
    {
      id: 2,
      text: "selfemployed",
    },
    {
      id: 3,
      text: "other",
    }
  ];
  constructor() { }
  isSelfEmployed: boolean = false;

  ngOnInit(): void {
  }
  onEmployeeTypeChange(event: any) {
    if (event.value === 'salaried') {
      this.isSelfEmployed = true;
    } else {
      this.isSelfEmployed = false;
    }
  }
}
