import { Component, OnInit } from '@angular/core';
import {Stock} from "../stock-manger/stock-manger.component";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock:Stock;
  constructor() { }

  ngOnInit() {
    this.stock = new Stock(1,"IBM",200.68,5,"股票备注",["IT","科技"]);
  }

}
