import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../appService/service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private msg:ServiceService) { }

  ngOnInit(): void {
  }
  logout(){
    this.msg.logout()
  }

}
