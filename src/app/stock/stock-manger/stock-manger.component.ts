import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import {StockService} from "../stock.service";
import {Stock} from "../stock.service";

@Component({
  selector: 'app-stock-manger',
  templateUrl: './stock-manger.component.html',
  styleUrls: ['./stock-manger.component.css']
})
export class StockMangerComponent implements OnInit {
  private stocks:Array<Stock>;
  constructor(public router:Router, private stockService:StockService) { }

  createx(){
    this.router.navigateByUrl('/stock/1');
  }

  update(stock:Stock){
    this.router.navigateByUrl('/stock/'+stock.id);
  }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
  }
}

