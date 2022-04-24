import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HeaderTask',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'Mi Lista De Tareas';


  constructor() { }

  ngOnInit(): void {
  }

}
