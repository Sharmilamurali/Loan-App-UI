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
    return this.http.post('http://localhost:8080/loans/createLoan', inputdata);
  }
  ViewAllLoan(): Observable<LoanModel[]> {
    return this.http.get<LoanModel[]>('http://localhost:8080/loans/');
  }
  DeleteLoan(loanNo: any) {
    return this.http.delete('http://localhost:8080/loans/deleteLoan/' + `${loanNo}`, { responseType: 'text' });
  }
  UpdateLoan(loanNo: any, value: any) {
    return this.http.put(`http://localhost:8080/loans/updateLoan/${loanNo}`, value);
  }
  ViewLoanbyId(loanNo: any): Observable<any> {
    return this.http.get<any>('http://localhost:8080/loans/getLoan/' + `${loanNo}`);
  }
  ViewUserLoan(username: string, loanNo: any = "",): Observable<any> {
    return this.http.get<any>('http://localhost:8080/loans/getLoans/' + `${username}` + '?loanNo=' + `${loanNo}`);
  }
  Search(loanNo: any = "", firstName: string = "", lastName: string = ""): Observable<any> {
    return this.http.get<any>('http://localhost:8080/loans/search?' + 'loanNo=' + `${loanNo}` + '&firstName=' + `${firstName}` + '&lastName=' + `${lastName}`);
  }
}
