import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  countValue: number=0;

  handleClickIncrementCount(){
    this.countValue++;
  }

  handleClickDeIncrementCount(){
      this.countValue--;
    }
}

