import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly baseUrl: string = 'http://localhost:8080/bootcamp';
  private readonly remoteUrl = 'https://bootcamp-dio-san-cristiano.herokuapp.com/bootcamp/';

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Array<Stock>> {
    return this.http.get<Stock[]>(`${this.remoteUrl}/stock`).toPromise();
  }
}
