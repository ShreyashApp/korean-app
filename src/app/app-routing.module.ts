import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {ResourceComponent} from './resource/resource.component';
import {ProjectdetsComponent} from './projectdets/projectdets.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'resource',component:ResourceComponent},
  {path:'resourceproj',component:ProjectdetsComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
