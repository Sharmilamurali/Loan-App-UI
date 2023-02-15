import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLoanComponent } from './create-loan/create-loan.component';
import { AuthGuard } from './Guard/auth.guard';
import { StatusComponent } from './status/status.component';
import { HomeComponent } from './home/home.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { RoleGuard } from './Guard/role.guard';
const routes: Routes = [

  { path: "createLoan", component: CreateLoanComponent,canActivate:[AuthGuard,RoleGuard] },
  { path: "home", component: HomeComponent,canActivate:[AuthGuard,RoleGuard] },
  { path: "homeUser", component: HomeUserComponent,canActivate:[AuthGuard] },
  {path:"login",loadComponent:()=>import('./login/login.component').then(opt=>opt.LoginComponent)},
  { path: "**", component: StatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
