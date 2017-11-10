import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initializeComponents();
  }

  initializeComponents(){
    $(document).ready(function () {
      $('.carousel').carousel({ fullWidth: true, indicators: true });
    });
  }
}
