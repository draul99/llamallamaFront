import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: string;
  email: string;
  password: string;
  confirmpassword: string;
  userType: string;


  usertypes: string[] = ['vendedor', 'comprador'];

  rbuttonChange(){
    console.log(this.userType)
  }

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.user);
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmpassword);
  }

}
