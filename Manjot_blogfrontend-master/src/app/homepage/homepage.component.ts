import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {log} from 'util';
import {AppServiceService} from '../login/app-service.service';
import {MyProfileServiceService} from '../myprofile/my-profile-service.service';
import {BlogServiceService} from '../editblog/blog-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  MyProd;
  MYVAR;
  disabled = true;
  id;
  Myvar2;
  myvar3;
  m = 0;
  constructor(private client: HttpClient, private Obj: MyProfileServiceService, private route: Router, private service: AppServiceService, private act: ActivatedRoute, private Ob: BlogServiceService) {
  }
Myvar;
 // show;
  ngOnInit() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    this.client.get('http://localhost:2000/api/getblog', {headers}).subscribe( data => {
      this.Myvar = data;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.Myvar.length; i++) {
        if (this.Myvar[i].access === 'Public' || this.Myvar[i].access === '') {
          this.show = this.Myvar;
          this.service.isPublic(true);
        }
      }
    });
  }
  edit() {
    this.disabled = false;
  }

  save() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.put('http://localhost:2000/users/update', this.MyProd, {headers}).subscribe(data => {
      this.route.navigate(['profile']);
      this.disabled = true;
    });
  }

  add2() {
    this.route.navigate(['add']);
  }

  edit1(id1) {
    this.route.navigate(['edit'], {
      queryParams: {
        id: id1
      }
    });
  }

  remove(id3) {
    this.route.navigate(['sure'], {
      queryParams: {
        id: id3
      }
    });
  }
  show(cate) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:2000/api/cat/' + cate, {headers}).subscribe( data => {
      this.MYVAR = data;
    });
  }


}

