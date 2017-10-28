import { Component, OnInit } from '@angular/core';
declare var JQuery: any;
declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor() {

  }

  ngOnInit(): void {
    
    $('.carousel.carousel-slider').carousel({ fullWidth: true, indicators: true, noWrap: true });
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }

}
