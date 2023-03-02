import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PracticeProject1';
  messageFromChild = '';






  msgFromChild(evt: any) {
    this.messageFromChild = evt.value;
    console.log(this.messageFromChild)
  }
}
