import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  stocks: Array<Stock> = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.fetchStocks();
  }


  async fetchStocks(): Promise<any> {
    this.stocks = await this.dashboardService.getStocks();
    console.log(this.stocks, 'estoques')
  }

}
