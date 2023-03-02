import { Component, EventEmitter, Input, Output, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  @Input()
  MessageFromParent = 'Hi Dad';
  @Output()
  messageToParent = new EventEmitter();

  formModel: any = {
    value: ''
  }



  constructor() { }

  ngOnInit(): void {
  }


  updateModel(evt: any) {
    this.formModel.value = evt?.target?.value
  }
  sendToParent(): void {
    this.messageToParent.emit(this.formModel)
  }

}
