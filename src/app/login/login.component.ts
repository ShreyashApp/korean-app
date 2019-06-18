import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Route } from '@angular/compiler/src/core';
import {FormControl,Validators,FormGroupDirective,NgForm, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private router:Router) { }
loginForm;
  checked = false;
  ngOnInit() {
    this.loginForm = new FormGroup({
      emailFormControl : new FormControl(''),
      passwordControl : new FormControl('')
    });
  }

  Login(){
    this.router.navigateByUrl('/resource');
  }
}
