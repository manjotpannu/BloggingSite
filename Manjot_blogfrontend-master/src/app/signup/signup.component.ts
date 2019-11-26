import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AppServiceService} from '../login/app-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private Http: HttpClient, private service: AppServiceService, private route: Router) { }
  email;
  password;
  repeat;
  name;
  address;
  Num;
  myprod;
  m=0;
  ngOnInit() {
    this.Http.get('http://localhost:2000/users/getuser').subscribe( data => {
      this.myprod = data;
    });
  }
  SignUp() {
    this.m = 0;
    let Myvar = {
      Num: this.Num,
      name: this.name,
      address: this.address,
      email: this.email,
      password: this.password,
      repeat: this.repeat
    };
    if(Myvar.password !== Myvar.repeat) {
      alert('Enter same Password plz');
      this.m = 1;
    }
    if(Myvar.name === '' || Myvar.email === '' || Myvar.Num === '' ) {
      alert('Plz Fill All credentials');
      this.m = 1;
    }
    for( let i = 0; i < this.myprod.length; i++) {
      if (this.myprod[i].email === Myvar.email) {
        alert('User Exists');
        this.m = 1;
        break;
      }
    }

    if (this.m === 0) {
      alert('New User');
      this.Http.post('http://localhost:2000/users/signup', Myvar).subscribe(data => {
        this.route.navigate(['/login']);
      });
    }
  }
}

