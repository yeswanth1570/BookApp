import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { utilityService } from 'src/services/utilityService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BookApp';
  constructor(private utilityService:utilityService){
    const usrData = this.utilityService.getUserDetails()
    if(usrData['msg'] != 'success'){
    
    }
  }

}
