import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private Http: HttpClient) { }
  editBlog(id , blog) {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.Http.put('http://localhost:2000/api/update?id=' + id, blog , {headers});
  }
    removeBlog(id) {
      const  token = sessionStorage.getItem('token');
      const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
      return this.Http.put('http://localhost:2000/api/delete?id=' + id, {headers});
  }
}

