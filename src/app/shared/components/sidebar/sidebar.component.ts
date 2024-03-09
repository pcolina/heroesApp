import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() isOpen!: boolean;
  @Output() isOpenChange: EventEmitter<boolean>
    = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.isOpenChange.emit(!this.isOpen)

  }
}
