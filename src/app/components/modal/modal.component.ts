import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
   selected: string = '';  

  @Output()
   onClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cancel() { this.onClose.emit(null); }

  selectedItem() { this.onClose.emit(this.selected) }

}
