import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitCoinService {
  constructor(private http: HttpClient) {}

  public getTransc(): Observable<any> {
    const API =
      'https://api.blockchain.info/charts/n-transactions?format=json&cors=true';
    return this.http.get(API);
  }

  public getMarketPrice(): Observable<any> {
    const API =
      'https://api.blockchain.info/charts/market-price?format=json&cors=true';
    return this.http.get(API);
  }
}
