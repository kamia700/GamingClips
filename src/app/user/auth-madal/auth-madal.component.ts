import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-madal',
  templateUrl: './auth-madal.component.html',
  styleUrls: ['./auth-madal.component.css']
})
export class AuthMadalComponent implements OnInit, OnDestroy {

  constructor(
    public modal: ModalService
  ) { }

  ngOnInit(): void {
    this.modal.register('auth');
  }

  ngOnDestroy(): void {
    this.modal.unregister('auth');
  }
}
