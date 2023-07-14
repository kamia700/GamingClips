import { Component, Input, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalID = '';

  constructor(
    public modal: ModalService,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
    function test (a: number, b: number | undefined, ... c: (number | undefined)[]) {
      console.log(a,b,c)
    };

    test(1,2,3,4,5);
  }
  ngOnDestroy(): void {
    document.body.removeChild(this.el.nativeElement)
  }

  closeModal(){
    this.modal.toggleModal(this.modalID);
  }

}
