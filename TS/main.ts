// main.ts
import { Auction } from './Auction';
import { Bidder } from './Bidder';

const auction = new Auction();

const bidder1 = new Bidder("Bidder 1");
const bidder2 = new Bidder("Bidder 2");

auction.addObserver(bidder1);
auction.addObserver(bidder2);

auction.placeBid(100);
auction.placeBid(150);

auction.removeObserver(bidder1);

auction.placeBid(200);
