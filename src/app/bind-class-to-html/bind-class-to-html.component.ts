import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind-class-to-html',
  templateUrl: './bind-class-to-html.component.html',
  styleUrls: ['./bind-class-to-html.component.css']
})
export class BindClassToHTMLComponent implements OnInit {
  public stringValue: string
  constructor() {
    this.stringValue = "hello world";
  }

  ngOnInit() {

  }
}
