import { Component, OnInit } from '@angular/core';
import { Currency } from '../../models/Currency';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  selectedCurrency: Currency;
  currencyList: Currency[];

  constructor(
    private currencyService: CurrencyService
  ) { }

  ngOnInit() {
    this.currencyService.selectedCurrency.subscribe( data => {
      this.currencyList = data.slice();
      this.selectedCurrency = Object.create(data.find( obj => obj.isActive ));
    });
  }

  updateCurrency() {
    this.currencyService.selectCurrency(this.selectedCurrency.name);
  }
}
