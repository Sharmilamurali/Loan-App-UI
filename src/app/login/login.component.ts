import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/User';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule
    , MatTableModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  resdata: any;
  ProceedLogin(logindata: any) {
    if (logindata.valid) {
      this.service.ProceedLogin(logindata.value).subscribe(item => {
        this.resdata = item;
        if (this.resdata != null) {
          localStorage.setItem('token', this.resdata.authToken);
          localStorage.setItem('username', this.resdata.username);
          this.route.navigate(['home']);
        } 
      },error=>alertify.error('Login Failed'));
    } 


  }
}
