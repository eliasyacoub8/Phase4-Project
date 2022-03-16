import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private httpClient : HttpClient, private loginrouter:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName:['',Validators.required], 
      lastName:['',Validators.required], 
      email:['',Validators.required], 
      password:['',Validators.required]
    })
  }
  registerUser(){
    this.httpClient.post<any>("http://localhost:3000/users",this.registerForm.value)
    .subscribe(res=>{
      alert("Succesful Signup");
      this.registerForm.reset(); 
      this.loginrouter.navigate(['login']);
    },err=>{
    alert("Unsucessful Registration");
  })
  }
}
