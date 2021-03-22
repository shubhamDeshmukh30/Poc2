import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url ="http://localhost:8000/user/registeruser";
  geturl="http://localhost:8000/user/fetchalluser";
  durl:string="http://localhost:8000/user/remove/hard";
  upurl:string="http://localhost:9091/employee/up";
  constructor(private http:HttpClient) { }

  sup:string="submit";
  resetbhidden:boolean=false;
  e:User={
    userId!:0,
    firstName!:"",
    surName!:"",
    age!:0,
    email!:"",
    occupation!:"",
    pincode!:0,
    city!:"",
    state!:"",
    country!:"",
    dob!:"",
    doj!:"",
    
  } 

  getdata(){
    console.log("ggg");
   return this.http.get(this.geturl);
   }

  postdata(emp:User){
    console.log(emp);
     return this.http.post(this.url,emp);

  }

  // updatedata(emp:User){ 
  //   // return this.http.put(this.upurl+"/"+emp.id,emp);
  // }

  deletedata(useri:number){
    console.log(useri);
    return this.http.delete(this.durl+"/"+useri);
  }
}
