import { Injectable } from '@angular/core';
import { ROUTER_INITIALIZER } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { InvokeFunctionExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

//user array
  user={
    profile:"",
    name:"",
    email:" "
  }
//user post array
  userPost:any

  
//signup
  info(data:any){
    this.user.email=data.email
    this.user.name=data.name
    this.user.profile=data.profile
  }
  addData(data:any){
    this.userPost=null
    console.log(data)
    this.http.post<any>("http://localhost:7000/addData",data).subscribe((res)=>{
      this.info(res)
    })

  }
  
//post a pic
  addPost(data:any){
    return this.http.post<any>("http://localhost:7000/addPost",data)
  }

  
  
// user login function 
  login(data:any){
    this.http.post<any>("http://localhost:7000/showData",data).subscribe((res)=>{
    if(res!=null){
     this.info(res)
    }
    });

    this.http.post<any>("http://localhost:7000/feed",data).subscribe((res)=>{
      this.userPost=res
    })
    
  }

//all member 
  people():Observable<any>{
    return this.http.get("http://localhost:7000/peopleInfo")
  }

  logout(){
    this.user.email=""
    this.user.name=""
    this.user.profile=""
  }
  //chat
  chat():Observable<any>{
    return this.http.get("http://localhost:7000/chat")
  }
  msgData={
    email:"",
    msg:""
  }
  send(msg:any){
    this.msgData.msg=msg.msg
    this.msgData.email=this.user.email
    return this.http.post<any>("http://localhost:7000/send",this.msgData)
  }
  forget(detail:any){
    console.log(detail)
    this.http.post<any>("http://localhost:7000/forget",detail).subscribe() 
  }
  changepic(pic:any){
    this.http.post<any>("http://localhost:7000/changepic",pic).subscribe((res)=>{
      this.user.profile=res;
      console.log(res)
    })
  }
  check(detail:any){
    return this.http.post<any>("http://localhost:7000/showData",detail)
  }
}
