import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-directive',
  templateUrl: './use-directive.component.html',
  styleUrls: ['./use-directive.component.css']
})
export class UseDirectiveComponent implements OnInit {

  success_msg= true;
  success_flag = false;

  cars="tesla"


  constructor() { }

  ngOnInit(): void {
  }

}
