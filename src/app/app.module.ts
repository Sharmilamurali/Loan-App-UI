import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StatusComponent } from './status/status.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateLoanComponent } from './create-loan/create-loan.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { ViewloanComponent } from './viewloan/viewloan.component';
import { MatDialogModule } from "@angular/material/dialog";
import { UpdateLoanComponent } from './update-loan/update-loan.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeUserComponent } from './home-user/home-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatusComponent,
    CreateLoanComponent,
    ViewloanComponent,
    UpdateLoanComponent,
    HomeUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
