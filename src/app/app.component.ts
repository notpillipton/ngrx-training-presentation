import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '@store/reducers/index';
import * as fromUIPanelState from '@store/actions/ui-state.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgRx Training Presentation';

  // Because of the Angular lifecycle, define these stream variables above the constructor
  detailPanelState$: Observable<fromUIPanelState.DetailPanelState> = this.store.pipe(select(fromStore.getDetailPanelState));
  leftPanelState$: Observable<fromUIPanelState.LeftPanelState> = this.store.pipe(select(fromStore.getLeftPanelState));
  mainPanelState$: Observable<fromUIPanelState.MainPanelState> = this.store.pipe(select(fromStore.getMainPanelState));

  detailPanelOffState = fromUIPanelState.DetailPanelState.PANEL_OFF;
  leftPanelOffState = fromUIPanelState.LeftPanelState.PANEL_OFF;
  mainPanelOffState = fromUIPanelState.MainPanelState.PANEL_OFF;

  constructor(private readonly store: Store<fromStore.ApplicationState>) { }
}
