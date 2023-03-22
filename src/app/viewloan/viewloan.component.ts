import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoanService } from '../service/loan.service';

@Component({
  selector: 'app-viewloan',
  templateUrl: './viewloan.component.html',
  styleUrls: ['./viewloan.component.css']
})
export class ViewloanComponent implements OnInit {

  constructor(private loanservice: LoanService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.GetExistdata(this.data.loanNo);
  }

  editdata: any;

  viewform = new FormGroup({
    loanNo: new FormControl({ value: "", disabled: true }),
    firstName: new FormControl({ value: "", disabled: true }),
    lastName: new FormControl({ value: "", disabled: true }),
    propertyAddress: new FormControl({ value: "", disabled: true }),
    loanType: new FormControl({ value: "", disabled: true }),
    loanTerm: new FormControl({ value: "", disabled: true }),
    loanAmount: new FormControl({ value: "", disabled: true })
  });

  GetExistdata(loanNo: any) {
    this.loanservice.ViewLoanbyId(loanNo).subscribe(item => {
      this.editdata = item;
      if (this.editdata != null) {
        this.viewform.setValue({
          loanNo: this.editdata.loanNo, firstName: this.editdata.firstName,
          lastName: this.editdata.lastName, propertyAddress: this.editdata.propertyAddress,
          loanType: this.editdata.loanType, loanTerm: this.editdata.loanTerm, loanAmount: this.editdata.loanAmount
        });
      }
    });
  }
}
