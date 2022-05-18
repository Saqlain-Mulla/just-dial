import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ElementConfigService } from '../element-config.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  myapiData : any;

  constructor(private eleConfig : ElementConfigService,private myHttp : HttpClient) { }

  ngOnInit(): void {

    this.myHttp.get("https://reqres.in/api/users?page=2").subscribe(
      (mydata) =>(this.myapiData=mydata)
    )
  }

}
