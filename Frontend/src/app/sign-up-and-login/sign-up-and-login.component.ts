import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-and-login',
  templateUrl: './sign-up-and-login.component.html',
  styleUrls: ['./sign-up-and-login.component.scss']
})
export class SignUpAndLoginComponent implements OnInit {

  constructor() { }
  UserName:string=''
  Password:string=''
  email:string=''
  number:number=0;
  ngOnInit(): void {
  }
  submit(){}
}
