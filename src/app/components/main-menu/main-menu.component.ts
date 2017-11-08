import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { User } from '../../classes/user';
declare var $;
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  loginForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder) {
    this.user = new User();
  }

  ngOnInit() {
    this.initializeComponent();

    this.loginForm = this.fb.group({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.maxLength(50)
      ]),
      password: new FormControl(this.user.password, [Validators.required, Validators.maxLength(50)]),
      email: new FormControl(this.user.email, [Validators.required, Validators.maxLength(50)])
    });
  }

  initializeComponent() {
    $(document).ready(function () {
      $('.carousel').carousel({ fullWidth: true, indicators: true });
    });

    $(document).ready(function () {
      $('.modal').modal();
    });
  }


  validateUser() {
    console.log(this.loginForm)
    //$('#modal1').modal('close');
  }

}
