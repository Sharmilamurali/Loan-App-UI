import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { LoanService } from '../service/loan.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})
export class CreateLoanComponent implements OnInit {

  constructor(private router: Router, private loanservice: LoanService) { }

  ngOnInit(): void {
  }

  respdata: any;

  RedirectLogin() {
    this.router.navigate(['login']);
  }
  RedirectHome() {
    this.router.navigate(['home']);
  }

  reactiveform = new FormGroup({
    loanNo: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])),
    firstName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
    lastName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
    propertyAddress: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
    loanType: new FormControl('',Validators.pattern('^[a-zA-Z ]*$')),
    loanTerm: new FormControl(''),
    loanAmount: new FormControl('')
  });
  SaveLoan() {
    if (this.reactiveform.valid) {
      this.loanservice.CreateLoan(this.reactiveform.value).subscribe(item => {
        this.respdata = item;
        if (this.respdata) {
          alertify.success('Created Sucessfully');
          this.RedirectHome();
        } else {
          alertify.error('Failed');

        }

      });
    }
  }

}
