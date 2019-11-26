import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from './authenticate.service';
import {AppServiceService} from './app-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthenticateService, private service: AppServiceService, private router: Router) { }
  username;
  password;
  ngOnInit() {
  }
  Login() {
  this.auth.authenticate(this.username , this.password).subscribe( data => {
  this.service.isLoggedIn(true);
  this.router.navigate(['home']);
  });
  }
}
