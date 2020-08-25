import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as fromActions from '@shared/store/actions/quotes.action';
import { FamousQuote } from '@sharedModels/famous-quote.model';
import { QuotesService } from '@sharedServices/quotes.service';

@Injectable()
export class QuotesEffects {

  getQuotes$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ActionTypes.QUOTES),
    mergeMap((action: fromActions.Quotes) => this.quotesService.getQuotes()
        .pipe(
          map((response: FamousQuote[]) => ({ type: fromActions.ActionTypes.QUOTES_SUCCESS, payload: response })),
          catchError(err => EMPTY)
        )
    )
  ));

  constructor(
    private readonly actions$: Actions,
    private quotesService: QuotesService
  ) {}
}
