// Bidder.ts
import { Observer } from './Observer';

export class Bidder implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(highestBid: number): void {
    console.log(`${this.name} - New highest bid is $${highestBid}`);
  }
}
