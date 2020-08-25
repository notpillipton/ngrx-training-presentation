import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '@store/reducers/index';
import * as fromUIPanel from '@store/actions/ui-state.action';

@Component({
  selector: 'app-left-panel-container',
  templateUrl: './left-panel-container.component.html',
  styleUrls: ['./left-panel-container.component.scss']
})
export class LeftPanelContainerComponent implements OnInit {
  @Input() leftPanelState: fromUIPanel.LeftPanelState;

  leftPanelStates = fromUIPanel.LeftPanelState;

  constructor(private readonly store: Store<fromStore.ApplicationState>) { }

  ngOnInit() {
  }

}