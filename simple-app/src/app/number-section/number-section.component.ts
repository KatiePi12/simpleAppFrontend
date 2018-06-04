import { Component } from '@angular/core';

@Component({
  selector: 'number-section',
  templateUrl: './number-section.component.html',
  styleUrls: ['./number-section.component.css']
})

export class NumberSectionComponent {
  generatedNumbers: number[];

  getGeneratedNumbers($event) {
    this.generatedNumbers = $event;
  }
}
