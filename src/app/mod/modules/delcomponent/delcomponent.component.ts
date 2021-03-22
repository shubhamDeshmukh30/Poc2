import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-delcomponent',
  templateUrl: './delcomponent.component.html',
  styleUrls: ['./delcomponent.component.css']
})
export class DelcomponentComponent implements OnInit {

  constructor(public s:CommonService) { }

  ngOnInit(): void {
  }
  userId!:number;
  deletedata(userId:number){
    console.log("-----------");
    this.s.deletedata(userId).subscribe();
  }

}
