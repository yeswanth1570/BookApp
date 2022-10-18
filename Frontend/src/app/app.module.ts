import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';  
import {MatListModule} from '@angular/material/list'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { SignUpAndLoginComponent } from './sign-up-and-login/sign-up-and-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { utilityService } from 'src/services/utilityService';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignUpAndLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [utilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
