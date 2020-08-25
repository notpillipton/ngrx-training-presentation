import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { FamousQuote } from './../models/famous-quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private readonly http: HttpClient) { }

  getQuotes(): Observable<FamousQuote[]> {
    return this.http.get('/src/assets/mock-data/quotes.json').pipe(
      map((response: any[]) => response.map((element, index) => ({...element, id: index}) as FamousQuote))
    );
  }
}
