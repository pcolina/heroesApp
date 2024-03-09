import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isOpen!: boolean;
  @Output() isOpenChange: EventEmitter<boolean>
    = new EventEmitter<boolean>();

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  public open(): void {
    this.isOpenChange.emit(!this.isOpen)
  }

  logOut() {
    this.auth.logout();
  }
}
