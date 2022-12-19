import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../appService/service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private msg: ServiceService) { }

  ngOnInit() {
    sessionStorage.removeItem('loginInfo')
  }
  logi="login"
  login(detail: any) {

    this.msg.login(detail)
    sessionStorage.setItem("loginInfo", JSON.stringify(detail))
    this.msg.check(detail).subscribe((res)=>{
      if(res==null){
        alert("Invalid password")
      }
      else{
        this.logi="profile";
      }
    })
    
   
  }
}
