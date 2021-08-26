import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'avengerAngular';
  booleanValue = true;
  ageArray = [42, 13, 68, 31];
  jsonValue = {
    pseudo : 'Superman',
    firstName : 'Clark',
    lastName : 'Kent',
    age : 31
  };

  countValue: number=0;

  handleClickIncrementCount(){
    this.countValue++;
  }

  handleClickDeIncrementCount(){
      this.countValue--;
    }
}
