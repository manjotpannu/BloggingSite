import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.scss']
})
export class AddblogComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router) { }
  about;
  content;
  category;
  access;
  ngOnInit() {
  }
  Add() {
   const myvar = {
      about: this.about,
      content: this.content,
      category: this.category,
     access: this.access
    };
   const  token = sessionStorage.getItem('token');
   const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
   this.http.post('http://localhost:2000/api/addbyuser', myvar, {headers}).subscribe( data => {
      alert('Added');
      this.route.navigate(['home']);
    });
  }
}
