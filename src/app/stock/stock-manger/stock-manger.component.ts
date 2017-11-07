import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import {FormControl} from "@angular/forms";
import {StockService} from "../stock.service";
import {Stock} from "../stock.service";
import "rxjs/Rx";
import {Observable} from "rxjs";

@Component({
  selector: 'app-stock-manger',
  templateUrl: './stock-manger.component.html',
  styleUrls: ['./stock-manger.component.css']
})
export class StockMangerComponent implements OnInit {
  private stocks:Array<Stock>;
  private nameFilter:FormControl = new FormControl();
  private keyword:string;

  constructor(public router:Router, private stockService:StockService) {
  }

  createx() {
    this.router.navigateByUrl('/stock/1');
  }

  update(stock:Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
  }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keyword = value);
  }
}

