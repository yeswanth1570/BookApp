import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class utilityService{
constructor(){

}
isLoggedIn=false;
getUserDetails(){
    let userDetails = {
        'msg':'failed',
        'userData':''
    }
    const userData = localStorage.getItem('usr')
    if(userData){
        userDetails['msg']='success'
        userDetails['userData'] = userData
    }
    return userDetails
}
}