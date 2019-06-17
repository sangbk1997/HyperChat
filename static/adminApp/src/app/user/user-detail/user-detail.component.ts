import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
declare var PushStream;
declare var $bean;

@Component({
  selector: 'admin-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

  constructor(){

  }
  ngOnInit(): void {
  }

}
