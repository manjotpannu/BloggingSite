import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyProfileServiceService {


  constructor(private client: HttpClient) { }
  getInfo() {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return (this.client.get('http://localhost:2000/users/get', {headers}));
  }
  getFollower() {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return  this.client.get('http://localhost:2000/follow/followers' , {headers});
  }
  deleteFollower(id) {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return  this.client.get('http://localhost:2000/follow/delete/UserId/' + id , {headers});
  }
  get(bool: boolean) {
    sessionStorage.setItem('publicc', String(bool));
    return bool;
  }
  check() {
    const publicc = sessionStorage.getItem('publicc');
    return JSON.parse(publicc);

  }
}
