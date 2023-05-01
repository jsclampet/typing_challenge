import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Typing Challenge';
  text: string = 'Lorem ipsum dolor sit amet';
  userInput: string = '';
  index = this.userInput.length - 1;
  textColor = '';

  onUserInput (value: string) {
    this.userInput = value; 
    if(this.text[this.index] == this.userInput[this.index]){ 
      this.textColor = 'green'
    } else { 
      this.textColor = "red"
    }
  }

}
