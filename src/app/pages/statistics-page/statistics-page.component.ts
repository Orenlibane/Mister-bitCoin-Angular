import { Component, OnInit } from '@angular/core';
import { BitCoinService } from 'src/services/bit-coin.service';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit {
  marketPriceData = null;
  transcPerDay = null;

  constructor(private BitCoinService: BitCoinService) {}

  ngOnInit() {
    this.BitCoinService.getMarketPrice().subscribe(data => {
      this.marketPriceData = data;
    });
    this.BitCoinService.getTransc().subscribe(data => {
      this.transcPerDay = data;
    });
  }
}
