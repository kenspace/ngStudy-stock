import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  constructor() {
  }

  private stocks:Stock[] = [
    new Stock(1, "IBM1", 200.68, 5, "股票备注", ["IT", "科技"]),
    new Stock(2, "IBM2", 200.68, 4, "股票备注", ["IT", "科技"]),
    new Stock(3, "IBM3", 200.68, 5, "股票备注", ["IT", "科技"]),
    new Stock(4, "IBM4", 200.68, 3, "股票备注", ["IT", "科技"]),
    new Stock(5, "IBM5", 200.68, 2, "股票备注", ["IT", "科技"]),
    new Stock(6, "IBM6", 200.68, 1, "股票备注", ["IT", "科技"]),
  ]

  getStocks():Stock[]{
    return this.stocks;
  }

  getStock(id:number):Stock{
    var stock = this.stocks.find(stock => stock.id == id);
    if(!stock){
      stock = new Stock(0, "", 0, 0, "", [])
    }
    return stock;
  }
}


export class Stock {
  constructor(public id:number,
              public name:string,
              public price:number,
              public rating:number,
              public desc:string,
              public categories:Array<string>) {

  }
}
