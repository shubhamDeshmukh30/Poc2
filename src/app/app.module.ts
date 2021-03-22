import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModulesModule } from './mod/modules/modules.module';
import { HttpClientModule } from '@angular/common/http';
import { FetchusersComponent } from './fetchusers/fetchusers.component';
import { Routes } from '@angular/router';
const routesapp: Routes=[
  
  {path:'mod1' ,loadChildren:() => ModulesModule}

  

  
];
@NgModule({
  declarations: [
    AppComponent,
    FetchusersComponent,
  ],
  imports: [
    BrowserModule, ModulesModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function routes(routes: any, arg1: { useHash: true; }): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

