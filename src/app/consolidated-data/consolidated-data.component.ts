// consolidated-data.component.ts
import { Component, OnInit } from '@angular/core';
import { ConsolidatedDataService } from './consolidated-data.service';
import { ConsolidatedData } from './consolidated-data.model';

@Component({
  selector: 'app-consolidated-data',
  templateUrl: './consolidated-data.component.html',
  styleUrls: ['./consolidated-data.component.scss']
})
export class ConsolidatedDataComponent implements OnInit {
  public consolidatedData: ConsolidatedData = {};

  constructor(private consolidatedDataService: ConsolidatedDataService) {}

  ngOnInit(): void {
    this.fetchConsolidatedData();
  }

  fetchConsolidatedData(): void {
    this.consolidatedDataService.getConsolidatedData().subscribe(data => {
      this.consolidatedData = data;
    });
  }
}
