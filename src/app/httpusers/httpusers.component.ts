import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpusers',
  templateUrl: './httpusers.component.html',
  styleUrls: ['./httpusers.component.css']
})
export class HttpusersComponent implements OnInit {
  public users:any = [];
  // http: any;

  public Showusers(){

    var request = this.http.get("https://jsonplaceholder.typicode.com/users").toPromise();
    request.then((data: any)=> this.users = data);
  }

  constructor(public http:HttpClient ) { }

  ngOnInit(): void {
  }

}
