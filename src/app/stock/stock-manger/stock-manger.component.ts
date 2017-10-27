import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-stock-manger',
  templateUrl: './stock-manger.component.html',
  styleUrls: ['./stock-manger.component.css']
})
export class StockMangerComponent implements OnInit {
  private stocks:Array<Stock>;
  constructor(public router:Router) { }

  createx(){
    this.router.navigateByUrl('/stock/1');
  }

  update(stock:Stock){
    this.router.navigateByUrl('/stock/'+stock.id);
  }

  ngOnInit() {
    this.stocks = [
      new Stock(1,"IBM",200.68,5,"股票备注",["IT","科技"]),
      new Stock(2,"IBM",200.68,4,"股票备注",["IT","科技"]),
      new Stock(3,"IBM",200.68,5,"股票备注",["IT","科技"]),
      new Stock(4,"IBM",200.68,3,"股票备注",["IT","科技"]),
      new Stock(5,"IBM",200.68,2,"股票备注",["IT","科技"]),
      new Stock(6,"IBM",200.68,1,"股票备注",["IT","科技"]),
    ]
  }
}

export  class  Stock{
  constructor(
    public id:number,
    public name:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}
