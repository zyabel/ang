import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Currency } from '../models/Currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currency: Currency[] = [
    {
      name: 'USD',
      isActive: true,
      coeff: 1
    },
    {
      name: 'EUR',
      isActive: false,
      coeff: 0.5
    },
    {
      name: 'GBP',
      isActive: false,
      coeff: 0.8
    },
  ];

  currencySource = new BehaviorSubject<Currency[]>(this.currency);
  selectedCurrency = this.currencySource.asObservable();

  constructor( ) { }

  selectCurrency(name: string) {
    this.currency = this.currency.map( (currency: Currency) => {
      // currency.isActive = currency.name === name;
      currency.name === name ? currency.isActive = true : currency.isActive = false;
      return currency;
    });
    this.currencySource.next(this.currency);
  }
}
