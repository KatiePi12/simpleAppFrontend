import {Component, Input} from '@angular/core';
import {NumberService} from "../services/numer.services";

@Component({
  selector: 'generate-average',
  templateUrl: './generate-average.component.html',
  styleUrls: ['./generate-average.component.css']
})

export class GenerateAverageComponent {
  @Input() numbers: number[];
  average: number;

  constructor(private numberService: NumberService) { }

  generateAverage() {
    this.numberService.generateAverage(this.numbers).subscribe(average => {
      this.average = average;
    })
  }
}
