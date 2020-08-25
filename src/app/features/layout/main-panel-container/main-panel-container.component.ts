import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '@store/reducers/index';
import * as fromUIPanelState from '@store/actions/ui-state.action';

@Component({
  selector: 'app-main-panel-container',
  templateUrl: './main-panel-container.component.html',
  styleUrls: ['./main-panel-container.component.scss']
})
export class MainPanelContainerComponent implements OnInit {

  // Because of the Angular lifecycle, define these stream variables above the constructor
  mainPanelState$: Observable<fromUIPanelState.MainPanelState> = this.store.pipe(select(fromStore.getMainPanelState));

  constructor(private readonly store: Store<fromStore.ApplicationState>) { }

  ngOnInit() {
  }

}
