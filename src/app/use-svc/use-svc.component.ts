import { Component, OnInit } from '@angular/core';
import { SVC1Service } from '../svc1.service';

@Component({
  selector: 'app-use-svc',
  templateUrl: './use-svc.component.html',
  styleUrls: ['./use-svc.component.css']
})
export class UseSvcComponent implements OnInit {

  constructor(public svcObj:SVC1Service) { }

  public PlugFb(){
    // var obj:SVC1Service = new SVC1Service
    return this.svcObj.showFbNotifications();
  }

  ngOnInit(): void {
  }

}
