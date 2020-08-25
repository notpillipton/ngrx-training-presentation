import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromStore from '@store/reducers/index';
import * as fromUIPanel from '@store/actions/ui-state.action';

@Component({
  selector: 'app-left-panel-controls',
  templateUrl: './left-panel-controls.component.html',
  styleUrls: ['./left-panel-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftPanelControlsComponent implements OnInit {

  constructor(private readonly store: Store<fromStore.ApplicationState>) { }

  ngOnInit() {
  }

  startup() {
    this.store.dispatch(new fromUIPanel.LeftPanelStateChange(fromUIPanel.LeftPanelState.MONITOR));
    this.store.dispatch(new fromUIPanel.MainPanelStateChange(fromUIPanel.MainPanelState.QUOTES_TABLE));
  }

}
