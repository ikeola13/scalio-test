import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://api.github.com/search/users?q=';

  private resultSource = new BehaviorSubject([]);
  currentResults = this.resultSource.asObservable();

  constructor(public httpClient: HttpClient) { }

  getResults(login: any): any {
    return this.httpClient.get(this.apiUrl + login + ' in:login').subscribe((res: any) => {
      this.resultSource.next(res.items);
    });
  }

}
