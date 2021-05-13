import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  submit(data: any): any {
    this.dataService.getResults(data.value);
  }

  ngOnDestroy(): any {
    this.subscription.unsubscribe();
  }

}
