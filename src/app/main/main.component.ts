import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  isShowModal: boolean = false;
  selected: string = '';
  title = 'angular-bulma';

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  showModal() {
    this.isShowModal = true;
  }

  selectedItem(selected) {
    this.isShowModal = false; // hide modal
    if(selected) {
      this.selected = selected;
    }
  }

}
