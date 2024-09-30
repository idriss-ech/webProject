import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  auth={
    email:'',
    password:''}

  
    constructor(private service:ServiceService, private router:Router){}
    logIn(){
        this.service.connexion(this.auth).subscribe(
          response=>{
              this.router.navigate(['/profile']);
          },
          error=>{
            console.log(error)
          }
        )
    }
}
