import { Component, OnInit } from '@angular/core';
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
export class MainMenuComponent implements OnInit {

  loginForm: FormGroup;
  user: User;
  errorLoginMessage:string;
  constructor(private fb: FormBuilder,private router:Router) {
    this.user = new User();
    this.errorLoginMessage = "";
  }

  ngOnInit() {
    this.initializeComponent();

    this.loginForm = this.fb.group({
      name: new FormControl(this.user.name, [Validators.required, Validators.maxLength(50)]),
      password: new FormControl(this.user.password, [Validators.required, Validators.maxLength(50)]),
      email: new FormControl(this.user.email, [Validators.required, Validators.maxLength(50),Validators.email])
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
    if(this.loginForm.invalid){

      this.setErrorMessageContent();

    }else{
      this.router.navigateByUrl("/memo-test");
      $('.modal').modal().close();
    }   
    //$('#modal1').modal('close');
  }

  setErrorMessageContent(){
    this.errorLoginMessage = "";
    if(this.loginForm.get("name").value == ""){
      this.errorLoginMessage = "Ingrese un nombre de usuario.";
    }
    if(this.loginForm.get("email").value == ""){
      if(this.errorLoginMessage != ""){
        this.errorLoginMessage += "</br>";
      }
      this.errorLoginMessage += "Ingrese un mail.";
    }
    if(this.loginForm.get("password").invalid){
      if(this.errorLoginMessage != ""){
        this.errorLoginMessage += "</br>";
      }
      this.errorLoginMessage += "Ingrese una contraseña.";
    }

    if(this.errorLoginMessage != ""){
      Materialize.toast(this.errorLoginMessage, 3000, "rounded");
    }
  }

}
