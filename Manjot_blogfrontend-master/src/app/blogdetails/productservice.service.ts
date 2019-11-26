import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private client: HttpClient) { }
  getinfo(id) {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2000/api/get/' + id;
    return this.client.get(url, {headers});
  }
  addF(id) {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:2000/follow/UserId/' + id, {headers});
  }
  current() {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:2000/users/get', {headers});
  }
}
