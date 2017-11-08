import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { User } from '../../classes/user';
import { Router } from '@angular/router';
declare var $;
declare var Materialize;
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.initializeComponent();
  }

  loginForm: FormGroup;
  user: User;
  errorLoginMessage: string;
  constructor(private fb: FormBuilder, private router: Router) {
    this.user = new User();
    this.errorLoginMessage = "";
  }

  ngOnInit() {
    // this.initializeComponent();
    this.loginForm = this.fb.group({
      name: new FormControl(this.user.name, [Validators.required, Validators.maxLength(20)]),
      email: new FormControl(this.user.email, [Validators.required, Validators.maxLength(30), Validators.email]),
      password: new FormControl(this.user.password, [Validators.required, Validators.maxLength(50)])
    });
  }

  initializeComponent() {
    $(document).ready(function () {
      $('.carousel').carousel({ fullWidth: true, indicators: true });
    });

    $(document).ready(function () {
      $('.modal').modal();
    });

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
    );
  }


  validateUser() {
    if (this.loginForm.invalid) {
      this.setErrorMessageContent();
    } else {
      localStorage.setItem("username", this.loginForm.get("name").value);
      localStorage.setItem("email", this.loginForm.get("email").value);
      $('#modal1').modal('close');
      this.router.navigateByUrl("/registered-users/list-of-games");
    }
  }

  setErrorMessageContent() {
    this.errorLoginMessage = "";
    if (this.loginForm.get("name").value == "") {
      this.errorLoginMessage = "Ingrese un nombre de usuario.";
    }
    if (this.loginForm.get("email").value == "") {
      if (this.errorLoginMessage != "") {
        this.errorLoginMessage += "</br>";
      }
      this.errorLoginMessage += "Ingrese un mail.";
    }
    if (this.loginForm.get("password").invalid) {
      if (this.errorLoginMessage != "") {
        this.errorLoginMessage += "</br>";
      }
      this.errorLoginMessage += "Ingrese una contraseña.";
    }

    if (this.errorLoginMessage != "") {
      Materialize.toast(this.errorLoginMessage, 3000, "rounded");
    }
  }

  setDefaultData() {
    this.loginForm.get("name").setValue("Nuevo usuario");
    this.loginForm.get("email").setValue("usuario@prueba.com");
    this.loginForm.get("password").setValue("123456");
    this.loginForm["_status"] = true;
  }

}
