import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ProductserviceService} from './productservice.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.scss']
})
export class BlogdetailsComponent implements OnInit {

  constructor(private route: Router, private client: HttpClient, private act: ActivatedRoute, private details: ProductserviceService) { }
  Myid;
  MYProd;
  user;
  ngOnInit() {
    this.act.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.Myid = id;
    });
    this.details.getinfo(this.Myid).subscribe( data => {
      this.MYProd = data;
    });
    this.details.current().subscribe( data => {
      this.user = data;
      console.log(data);
    });
  }
  follow(id) {
    this.details.addF(id).subscribe( data => {
      console.log(data);
      alert('You started following');
    });
  }
}
