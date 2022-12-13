import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {
  constructor() {}

  getRandomInt(num: number) {
    return Math.floor(Math.random() * num) + 1;
  }
}
