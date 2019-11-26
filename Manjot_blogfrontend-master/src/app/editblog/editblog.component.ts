import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogServiceService} from './blog-service.service';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.scss']
})
export class EditblogComponent implements OnInit {

  constructor(private Http: HttpClient, private route: Router, private service: BlogServiceService, private act: ActivatedRoute) { }
  Myvar;
  id;
  about;
  content;
  category;
  accesss;
  ngOnInit() {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    this.Http.get('http://localhost:2000/api/getblog', {headers}).subscribe( data => {
      this.Myvar = data;
      this.about = this.Myvar[this.id - 1].about;
      this.content = this.Myvar[this.id - 1].content;
      this.category = this.Myvar[this.id - 1].category;
      this.accesss = this.Myvar[this.id - 1].accesss;
    });
    this.act.queryParamMap.subscribe((data) => {
      this.id = data.get('id');
    });
  }
save() {
  this.service.editBlog(this.id, {
    about: this.about,
    content: this.content,
    category: this.category,
    accesss: this.accesss
  }).subscribe(data => {
    this.route.navigate(['profile']);
  });
}
  remove() {
    /*this.route.navigate(['sure'], {
      queryParams: {
        id: id3
      }
    });*/
    this.service.removeBlog(this.id).subscribe( data => {
      this.route.navigate(['home']);
    });
  }
}
