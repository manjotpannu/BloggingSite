import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../login/authenticate.service';
import {AppServiceService} from "../login/app-service.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private service: AppServiceService,private http:HttpClient, private route: Router) {
  }

  ngOnInit() {
  }

  logout() {
    if (this.service.checkLogin()) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('auth');
      this.service.isLoggedIn(false);
      this.http.get('http://localhost:2000/users/logout').subscribe(res => {
      });
      this.route.navigate(['/login']);
    }
  }
  login() {
    this.route.navigate(['login']);
  }
  profile() {
    this.route.navigate(['profile']);
  }
  }


