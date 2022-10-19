import { Component, Inject, OnInit,EventEmitter ,Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { utilityService } from 'src/services/utilityService';


@Component({
  selector: 'app-sign-up-and-login',
  templateUrl: './sign-up-and-login.component.html',
  styleUrls: ['./sign-up-and-login.component.scss']
})
export class SignUpAndLoginComponent implements OnInit {


  // UserName:string=''
  // Password:string=''
  // email:string=''
  // number:number=0;
  @Output() closeDialog:EventEmitter<any> = new EventEmitter()
  type='signup'
  loginForm:any;
  signUpForm:any;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
    this.signUpForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      mobile: new FormControl(''),
      Email: new FormControl('')
    });
  }
  constructor(private utilService:utilityService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  submit(Form:any){
    // form validations
    if(this.type === 'login'){
      // call login service
      this.utilService.isLoggedIn =true

    }else if(this.type === 'signUp'){
      // register user
    }
    this.closeDialog.emit({
      'key':'value'
    })
  }


}
