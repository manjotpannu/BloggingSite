import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MyProfileServiceService} from './my-profile-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppServiceService} from '../login/app-service.service';
import {BlogServiceService} from '../editblog/blog-service.service';
import {log} from 'util';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  MyProd;
  MYVAR;
  disabled = true;
  id;
  arr;
  Myvar2;
  myvar3;
  m = 0;
  constructor(private client: HttpClient, private Obj: MyProfileServiceService, private route: Router, private service: AppServiceService, private act: ActivatedRoute, private Ob: BlogServiceService) {
  }

  ngOnInit() {
    this.Obj.getInfo().subscribe(data => {
      this.MyProd = data;
    });
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    this.client.get('http://localhost:2000/api/getuserbyid', {headers}).subscribe(data1 => {
      this.MYVAR = data1;
      this.Myvar2 = data1;
      console.log(data1);
    });
    this.act.queryParamMap.subscribe((data) => {
      this.id = data.get('id');
    });
   /* for (let i = 0 ; i < this.Myvar2.length; i++) {
      for (let j = i + 1 ; j < this.Myvar2.length; j++) {
        if (this.Myvar2[i].category === this.Myvar2[j].category) {
         this.myvar3[this.m] = this.Myvar2[i].category;
         this.m++;
        } else {
          this.myvar3[this.m] = this.Myvar2[i].category;
        }
      }
    }*/
    // console.log(this.myvar3);

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
  Allf() {
    this.Obj.getFollower().subscribe( data => {
      this.arr = data;
      this.Obj.get(true);
    });
  }
  Details() {
    this.Obj.getInfo().subscribe(data => {
      this.MyProd = data;
      this.Obj.get(false);
    });
  }
  unfollow(id) {
    if(confirm('Do You want to unfollow')) {
      this.Obj.deleteFollower(id).subscribe( data => {
        this.Obj.getFollower().subscribe( data => {
          this.arr = data;
        });
      });
    } else {}
  }

  /*add2() {
    this.route.navigate(['add']);
  }*/

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
  add2() {
    this.route.navigate(['add']);
  }
  show(cate) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:2000/api/cat/' + cate, {headers}).subscribe( data => {
      this.MYVAR = data;
    });
  }
}
