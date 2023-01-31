import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  public visiable = false;
  constructor() { }

  isModalOpen(){
    return this.visiable;
  }

  toggleModal(){
    this.visiable = !this.visiable;
    console.log('this.visiable', this.visiable);
  }
}
