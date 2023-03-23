import { Component, OnInit } from '@angular/core';
import { LoanService } from '../service/loan.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewloanComponent } from '../viewloan/viewloan.component';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  constructor(private loanservice: LoanService, private dialog: MatDialog) { }
  username = localStorage.getItem('username');
  ngOnInit(): void {
    this.ViewUserLoan(this.username);
  }
  LoanDetails: any;
  userDataSource: any;
  loanNo: any;
  searchByloanNo(searchloanNo: any) {
    this.loanNo = searchloanNo;
    this.ViewUserLoan(this.username, this.loanNo);
  }
  ViewUserLoan(username: any, loanNo: any = "") {
    this.loanservice.ViewUserLoan(username, loanNo).subscribe(item => {
      this.LoanDetails = item;
      this.userDataSource = this.LoanDetails;
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
}
