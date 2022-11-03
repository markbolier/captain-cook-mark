import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {


  isOpen: boolean = false;

  toggleMenu() {
    this.isOpen = this.isOpen ? false : true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
