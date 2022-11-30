import { Component, OnInit } from '@angular/core';
import { cart, login, product } from '../data-type';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  showLogin: boolean = true;
  authError: string = "";
  constructor(private user: UserService, private product: ProductService) { }

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
      } else {
        this.localCartToRemoveCart()
      }
    })
  }

  openSignup() {
    this.showLogin = false;
  }

  openLogin() {
    this.showLogin = true;
  }

  localCartToRemoveCart() {
    let data = localStorage.getItem('localCart');
    if (data) {
      let cartDataList: product[] = JSON.parse(data);
      let user = localStorage.getItem('user');
      let userId = user && JSON.parse(user).id;

      cartDataList.forEach((product: product, index) => {
        let cartData: cart = {
          ...product,
          productId: product.id,
          userId
        };

        delete cartData.id;
        setTimeout(() => {
          this.product.addToCart(cartData).subscribe((result) => {
            if (result) {
              console.warn("Item stored in DB");
            }
          })
          if (cartDataList.length === index + 1) {
            localStorage.removeItem('localCart');
          }
        }, 500);
      })
    }
  }
}
