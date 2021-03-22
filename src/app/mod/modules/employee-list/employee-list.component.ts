import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public s:CommonService ) { }
  emp!:User[];
  User=new User();
  userId!:number;
  gd:any =[];
  data :any=[];
  ngOnInit(): void {
    this.s.getdata().subscribe(data  => {
    this.gd=data;
    
  
  })
    // editData(emp:Employee){ 
    //   this.s.sup="update";
    //   this.s.resetbhidden=true;
    //   this.s.e=Object.assign({}, emp);
    // }

    // deletedata(userId:number){
    //   console.log("-----------");
    //   this.s.deletedata(userId).subscribe();
    // }
    // // get data method
    // getdata(emp:User)
    // {
    //   this.s.getdata(emp).subscribe(rs => {
    //     console.log(rs);
    //     this.gd=rs; 
       
    //    });
    //    console.log(this.emp)
    // }

}}
