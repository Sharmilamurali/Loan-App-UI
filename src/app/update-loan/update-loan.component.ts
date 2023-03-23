import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoanService } from '../service/loan.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-update-loan',
  templateUrl: './update-loan.component.html',
  styleUrls: ['./update-loan.component.css']
})
export class UpdateLoanComponent implements OnInit {
  constructor(private loanservice: LoanService, @Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<UpdateLoanComponent>) { }
  ngOnInit(): void {
    this.GetExistdata(this.data.loanNo);

  }
  editdata: any;
  saveloan: any;
  updateform = new FormGroup({
    loanNo: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])),
    firstName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
    lastName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
    propertyAddress: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
    loanType: new FormControl('', Validators.pattern('^[a-zA-Z ]*$')),
    loanTerm: new FormControl(''),
    loanAmount: new FormControl('')
  });
  SaveLoan() {
    if (this.updateform.valid) {
      this.loanservice.UpdateLoan(this.data.loanNo, this.updateform.value).subscribe(item => {
        this.saveloan = item;
        alertify.success("Updated Successfully");
        this.ref.close();
      });
    }
  }
  GetExistdata(loanNo: any) {
    this.loanservice.ViewLoanbyId(loanNo).subscribe(item => {
      this.editdata = item;
      if (this.editdata != null) {
        this.updateform.setValue({
          loanNo: this.editdata.loanNo, firstName: this.editdata.firstName,
          lastName: this.editdata.lastName, propertyAddress: this.editdata.propertyAddress,
          loanType: this.editdata.loanType, loanTerm: this.editdata.loanTerm, loanAmount: this.editdata.loanAmount
        });
      }
    });
  }
}
