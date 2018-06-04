import {Component, EventEmitter, Output} from '@angular/core';
import {NumberService} from "../services/numer.services";

@Component({
  selector: 'generate-numbers',
  templateUrl: './generate-numbers.component.html',
  styleUrls: ['./generate-numbers.component.css']
})

export class GenerateNumbersComponent {
  amount: number;
  generatedNumbers: number[];
  @Output() numbersGenerateEvent = new EventEmitter();

  constructor(private numberService: NumberService) { }

  generateNumbers() {
    this.numberService.generateNumbers(this.amount).subscribe(numbers => {
      this.generatedNumbers = numbers;
      this.numbersGenerateEvent.emit(this.generatedNumbers);
    })
  }
}
