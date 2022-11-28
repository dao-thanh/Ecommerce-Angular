import { Component, OnInit } from '@angular/core';
import { login } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  showLogin: boolean = true;
  authError: string = "";
  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp(data: any) {
    this.user.userSignup(data);
  }

  login(data: login) {
    this.user.userLogin(data);
    this.user.isValidUserAuth.subscribe((result: any) => {
      console.warn(result);
      if (result) {
        this.authError = "Please enter valid user details"
      }
    })
  }

  openSignup() {
    this.showLogin = false;
  }

  openLogin() {
    this.showLogin = true;
  }
}
