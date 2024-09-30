import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
   account={
    firstname:'', 
    lastname:'',
    email:'',
    password:''}
    message = ''
    showMessageBox = false;
    messageBg = ''
    constructor(private service:ServiceService){}
    

    signIn(){
      this.service.register(this.account).subscribe(
        response=>{
          
            this.showMessageBox=true;
            this.messageBg="rgb(37, 191, 124)"
            this.message='Account created succefully'
          setTimeout(() => {
            this.showMessageBox = false
          }, 3000);
          
        },
        error=>{
          this.showMessageBox=true;
          this.messageBg="rgb(233, 57, 57)"
          this.message='Account already exist'
        setTimeout(() => {
          this.showMessageBox = false
        }, 3000);
        }
      )
    }
}
