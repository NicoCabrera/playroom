import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initializeComponent();
  }

  initializeComponent(){
    $(document).ready(function(){
      $('.carousel').carousel({fullWidth: true,indicators:true});
    });
        
  }

}
