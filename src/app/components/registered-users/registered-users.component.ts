import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(["/"]);
  }

}
