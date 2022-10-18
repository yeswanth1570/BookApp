import { Injectable } from "@angular/core";

@Injectable()

export class utilityService{
constructor(){

}
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