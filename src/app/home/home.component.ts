import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  thumbLabel: any;
  loanamount!: number;
  rateofinterest!: number;
  tenure!: number;
  loanForm!: FormGroup;
  rateofint!: number;
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  emi!:number;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   this.loanamount=100000 ;
 this.rateofinterest=10;
  this.tenure=12;
    this.loanForm = this.fb.group({
      'loanamount': '',
      'tenure': '',
      'rateofinterest': ''
    })

    this.loanForm.get('loanamount')?.valueChanges.subscribe((el) => {
      console.log(el)
      this.loanamount = el;
    })

    this.loanForm.get('tenure')?.valueChanges.subscribe((valu) => {
      console.log(valu)
      this.tenure = valu;
    })

    this.loanForm.get('rateofinterest')?.valueChanges.subscribe((value) => {
      console.log(value)
      this.rateofinterest = value;
    })

    this.calcaulateEMI();
  }

  calcaulateEMI() {

    var rateofinterest = (1 + (this.rateofinterest / 12 / 100))
    this.emi = (this.loanamount * rateofinterest) * Math.pow(rateofinterest, this.tenure) / Math.pow(rateofinterest, this.tenure - 1)
    
    console.log('emi', this.emi);
  }

  setshowAmount() {
    // this.loanForm.get('loanamount')?.setValue(this.loanamount);
    this.loanForm.controls['loanamount'].setValue(this.loanamount)
  }

  settenure() {
    this.loanForm.controls['tenure'].setValue(this.tenure)
  }

  setrateofinterest() {
    this.loanForm.controls['rateofinterest'].setValue(this.rateofinterest)
    this.calcaulateEMI();
  }
  
 

}
