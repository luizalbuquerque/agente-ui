// consolidated-data-service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsolidatedData } from './consolidated-data.model';

@Injectable({
  providedIn: 'root'
})
export class ConsolidatedDataService {
  private apiUrl = 'http://localhost:8080/api/consolidated'; // Substitua pela URL correta

  constructor(private http: HttpClient) {}

  getConsolidatedData(): Observable<ConsolidatedData> {
    return this.http.get<ConsolidatedData>(this.apiUrl);
  }
}
