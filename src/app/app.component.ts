import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  constructor(private route: Router, private service: UserService) { }
  title = 'loan-management-app';
  isMenuVisible = false;
  isUserMenuVisible = false;
  isadmin = false;
  ngDoCheck(): void {
    const currentroute = this.route.url;
    if (currentroute == '/createLoan' || currentroute == '/home') {
      this.isMenuVisible = true
    } else {
      this.isMenuVisible = false
    }

    if (currentroute == '/homeUser') {
      this.isUserMenuVisible = true
    } else {
      this.isUserMenuVisible = false
    }
  }
  // roleData:any;
  // roleName:String;

  // GetRole(username:String) {

  //     this.service.ViewRole(username).subscribe(item => {
  //       this.roleData = item;
  //       this.roleName=this.roleData.roleName;


  //     });
  //   }
  // }
}
