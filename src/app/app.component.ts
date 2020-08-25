import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '@store/reducers/index';
import * as fromUIPanelState from '@store/actions/ui-state.action';
import * as fromQuotes from '@store/actions/quotes.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NgRx Training Presentation';

  // Because of the Angular lifecycle, define these stream variables above the constructor
  detailsPanelState$: Observable<fromUIPanelState.DetailsPanelState> = this.store.pipe(select(fromStore.getDetailsPanelState));
  leftPanelState$: Observable<fromUIPanelState.LeftPanelState> = this.store.pipe(select(fromStore.getLeftPanelState));
  mainPanelState$: Observable<fromUIPanelState.MainPanelState> = this.store.pipe(select(fromStore.getMainPanelState));

  detailsPanelOffState = fromUIPanelState.DetailsPanelState.PANEL_OFF;
  leftPanelOffState = fromUIPanelState.LeftPanelState.PANEL_OFF;
  mainPanelOffState = fromUIPanelState.MainPanelState.PANEL_OFF;

  constructor(private readonly store: Store<fromStore.ApplicationState>) { }

  ngOnInit() {
    this.store.dispatch(new fromUIPanelState.LeftPanelStateChange(fromUIPanelState.LeftPanelState.CONTROLS));
    this.store.dispatch(new fromQuotes.Quotes());
  }
}
