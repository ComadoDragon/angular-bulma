import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  isShowModal: boolean = false;
  selected: string = '';
  title = 'angular-bulma';

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
