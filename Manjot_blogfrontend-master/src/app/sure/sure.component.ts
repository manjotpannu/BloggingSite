import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BlogServiceService} from "../editblog/blog-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sure',
  templateUrl: './sure.component.html',
  styleUrls: ['./sure.component.scss']
})
export class SureComponent implements OnInit {

  constructor(private client: HttpClient, private Obj: BlogServiceService, private act: ActivatedRoute, private route: Router) { }
  id;
  ngOnInit() {
    this.act.queryParamMap.subscribe((data) => {
      this.id = data.get('id');
    });
  }
  yes() {
    this.Obj.removeBlog(this.id).subscribe( data => {
      this.route.navigate(['home']);
    });
  }

}
