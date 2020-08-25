import { Action } from '@ngrx/store';
import { FamousQuote } from '@sharedModels/famous-quote.model';

export const enum ActionTypes {
  QUOTES = '[Quotes] Get',
  QUOTES_SUCCESS = '[Quotes] Get Success',
  QUOTES_FAIL = '[Quotes] Get Fail',
  SELECT_QUOTE_BY_ID = '[Quotes] Select Quote by ID',
  UPDATE_QUOTE_BY_ID = '[Quotes] Update Quote by ID'
}

export class Quotes implements Action {
  readonly type = ActionTypes.QUOTES;
  constructor() {}
}

export class QuotesSuccess implements Action {
  readonly type = ActionTypes.QUOTES_SUCCESS;
  constructor(public payload: FamousQuote[]) {}
}

export class QuotesFail implements Action {
  readonly type = ActionTypes.QUOTES_FAIL;
  constructor(public payload: string) {}
}

export class SelectQuoteById implements Action {
  readonly type = ActionTypes.SELECT_QUOTE_BY_ID;
  constructor(public payload: number) {}
}

export class UpdateQuoteById implements Action {
  readonly type = ActionTypes.UPDATE_QUOTE_BY_ID;
  constructor(public payload: FamousQuote) {}
}

export type QuotesAction = Quotes | QuotesSuccess | QuotesFail | SelectQuoteById | UpdateQuoteById;
