import { Component, OnInit } from '@angular/core';
import { LoanService } from '../service/loan.service';
import * as alertify from 'alertifyjs';
import { MatDialog } from '@angular/material/dialog';
import { ViewloanComponent } from '../viewloan/viewloan.component';
import { UpdateLoanComponent } from '../update-loan/update-loan.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private loanservice: LoanService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.ViewAllLoan();
  }
  LoanDetails: any;
  dataSource: any;
  loanNo: any;
  firstName: any;
  lastName: any;
  results: any;
  ViewAllLoan() {
    this.loanservice.ViewAllLoan().subscribe(item => {
      this.LoanDetails = item;
      this.dataSource = this.LoanDetails;
    });
  }
  searchByloanNo(searchloanNo: any) {
    this.loanNo = searchloanNo;
    this.SearchLoan(this.loanNo);
  }
  searchByfirstName(searchfirstName: any) {
    this.firstName = searchfirstName;
    this.SearchLoan(this.firstName);
  }
  searchBylastName(searchlastName: any) {
    this.lastName = searchlastName;
    this.SearchLoan(this.lastName);
  }
  SearchLoan(loanNo = "", firstName = "", lastName = "") {
    this.loanservice.Search(this.loanNo, this.firstName, this.lastName).subscribe(item => {
      this.results = item;
      this.dataSource = this.results;
    });
  }
  displayedColumns: string[] = ['loanNo', 'firstName', 'lastName', 'propertyAddress', 'Action'];
  FunctionView(loanNo: any) {
    let popup = this.dialog.open(ViewloanComponent, {
      width: '400px',
      height: '500px',
      data: {
        loanNo: loanNo
      }
    })
  }
  FunctionUpdate(loanNo: any) {
    let popup = this.dialog.open(UpdateLoanComponent, {
      width: '400px',
      height: '500px',
      data: {
        loanNo: loanNo
      }
    })
    popup.afterClosed().subscribe(item => {
      this.ViewAllLoan();
    });
  }
  FunctionDelete(loanNo: any) {
    alertify.confirm("Do you want to delete this loan?", ".", () => {
      this.loanservice.DeleteLoan(loanNo).subscribe(item => {
        this.ViewAllLoan();
        alertify.success("Deleted Successfully");
      });
    }, function () { }).set('resizable', true).resizeTo('5%', 5);
  }
}
