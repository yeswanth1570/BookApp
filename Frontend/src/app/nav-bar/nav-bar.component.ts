import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpAndLoginComponent } from '../sign-up-and-login/sign-up-and-login.component';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  decideSignUpOrLogin(){
    const dialogRef = this.dialog.open(SignUpAndLoginComponent,{
      width: '550px',
      height:'350px',
    })
  }
}
