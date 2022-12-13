import { Component, OnInit, Input } from '@angular/core';
import { RandomService } from './random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent implements OnInit {
  @Input() max_num: number;
  @Input() random_number: number;
  @Input() text: string;
  @Input() text_color: string;
  random_service: RandomService = new RandomService();

  constructor() {}

  getRandom(max_num: number) {
    this.random_number = this.random_service.getRandomInt(max_num);
    if (this.random_number > 0.5 * max_num) {
      this.text = 'Górna połowa wartości';
      this.text_color = 'red';
    } else {
      this.text = 'Dolna połowa wartości';
      this.text_color = 'green';
    }
  }

  ngOnInit() {
    this.getRandom(this.max_num);
    this.getRandom(this.max_num);
  }
}
