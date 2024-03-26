// Auction.ts
import { Observer } from './Observer';

export class Auction {
  private highestBid: number = 0;
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(o => o !== observer);
  }

  notifyObservers(): void {
    this.observers.forEach(observer => observer.update(this.highestBid));
  }

  placeBid(newBid: number): void {
    if (newBid > this.highestBid) {
      this.highestBid = newBid;
      this.notifyObservers();
      console.log(`New highest bid: $${newBid}`);
    } else {
      console.log(`Bid of $${newBid} is not higher than the current highest bid of $${this.highestBid}`);
    }
  }
}
