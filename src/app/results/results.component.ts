import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  results: any[];
  p = 1;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentResults.subscribe(data => {
      this.results = data;
    });
  }

  ngOnDestroy(): any {
    this.subscription.unsubscribe();
  }

  dynamicSort(property): any {
    let sortOrder = 1;

    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }

    return (a, b) => {
      if (sortOrder === -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    };
  }

  sort(type): any {
    this.results.sort(this.dynamicSort(type));
    this.p = 1;
  }

}
