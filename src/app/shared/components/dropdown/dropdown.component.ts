import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent implements OnInit {
  isOpen = false;
  expanded = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  toggleExpanedClass() {
    this.expanded = !this.expanded;
  }

  constructor() {}

  ngOnInit(): void {}
}
