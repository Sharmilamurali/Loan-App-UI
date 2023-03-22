import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanModel } from '../Model/LoanModel';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }

  CreateLoan(inputdata: any) {
    return this.http.post('http://localhost:8080/loan/createLoan', inputdata);
  }

  ViewAllLoan(): Observable<LoanModel[]> {
    return this.http.get<LoanModel[]>('http://localhost:8080/loan/viewAllLoan');
  }

  DeleteLoan(loanNo: any) {
    return this.http.delete('http://localhost:8080/loan/deleteLoan/' + `${loanNo}`, { responseType: 'text' });
  }

  UpdateLoan(loanNo: any, value: any) {
    return this.http.put(`http://localhost:8080/loan/updateLoan/${loanNo}`, value);
  }

  ViewLoanbyId(loanNo: any): Observable<any> {
    return this.http.get<any>('http://localhost:8080/loan/viewLoanbyId/' + `${loanNo}`);
  }

  ViewUserLoan(username: string, loanNo: any = "",): Observable<any> {
    return this.http.get<any>('http://localhost:8080/loan/viewUserLoan/' + `${username}` + '?loanNo=' + `${loanNo}`);
  }

  Search(loanNo: any = "", firstName: string = "", lastName: string = ""): Observable<any> {
    return this.http.get<any>('http://localhost:8080/loan/search?' + 'loanNo=' + `${loanNo}` + '&firstName=' + `${firstName}` + '&lastName=' + `${lastName}`);
  }

}
