import { Injectable } from '@angular/core';

@Injectable()
export class RandomNumberService {
  pick(min:number, max:number) {
    return Math.floor(
      Math.random() * (max - min) + min);
  }
}
