import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarStatus:boolean;

  constructor() { 
    this.sidebarStatus = true;
  }

  ngOnInit(): void {
  }


  onHide() {
      this.sidebarStatus = !this.sidebarStatus;
  }



}
