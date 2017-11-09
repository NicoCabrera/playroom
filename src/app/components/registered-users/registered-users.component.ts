import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  username:string;
  email:string;
  constructor(private router:Router) { 
    this.username = localStorage.getItem("username");
    this.email = localStorage.getItem("email");
  }

  ngOnInit() {
    $(".button-collapse").sideNav({
      closeOnClick: true,
    });
  }

  logOut(){
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    this.router.navigate(["/"]);
  }

  

}
