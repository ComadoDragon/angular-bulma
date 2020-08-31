import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showHideDropdown() {
    this.isActive = !this.isActive;
  }

}
