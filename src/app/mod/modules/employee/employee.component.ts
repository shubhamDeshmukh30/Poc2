import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public ss:CommonService, private route:Router) { }

  emp!:User[];

  ngOnInit(): void {
  }
  submitdata(emp:User){
    // if(emp.id==0){
    this.ss.postdata(emp).subscribe();
    // }else{
    //   this.ss.updatedata(emp).subscribe();
    // }
    //this.route.navigateByUrl('fetchusers/fetchusers.component.html')
}

// resetdata(){
//   this.ss.e=Object.assign({},null);
// }
listdisplay()
{
this.route.navigateByUrl('mod1/list');
}
}