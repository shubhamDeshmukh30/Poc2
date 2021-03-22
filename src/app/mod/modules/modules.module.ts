import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DelcomponentComponent } from './delcomponent/delcomponent.component';
import { RouterModule, Routes } from '@angular/router';

const routeseee: Routes=[
  
  {path:'list', component : EmployeeListComponent},
  {path:'delll', component : DelcomponentComponent},
  
];

@NgModule({
  declarations: [EmployeeComponent, EmployeeListComponent, DelcomponentComponent],
  imports: [
    CommonModule, HttpClientModule, FormsModule,RouterModule.forRoot(routeseee)
  ], exports:[EmployeeComponent,EmployeeListComponent]
})
export class ModulesModule { }
