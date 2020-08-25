import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '@store/reducers/index';
import * as fromUIPanel from '@store/actions/ui-state.action';
import * as fromQuotes from '@store/actions/quotes.action';
import { FamousQuote } from '@shared/models/famous-quote.model';

@Component({
  selector: 'app-main-panel-container',
  templateUrl: './main-panel-container.component.html',
  styleUrls: ['./main-panel-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPanelContainerComponent implements OnInit {

  @Input() mainPanelState: fromUIPanel.MainPanelState;

  // Because of the Angular lifecycle, define these stream variables above the constructor
  quotesData$: Observable<FamousQuote[]> = this.store.pipe(select(fromStore.getQuotesData));

  mainPanelStates = fromUIPanel.MainPanelState;

  constructor(private readonly store: Store<fromStore.ApplicationState>) { }

  ngOnInit() {
  }

  selectQuote($event) {
    this.store.dispatch(new fromQuotes.SelectQuoteById($event.id));
    this.store.dispatch(new fromUIPanel.DetailsPanelStateChange(fromUIPanel.DetailsPanelState.QUOTE_DETAIL));
  }
}
