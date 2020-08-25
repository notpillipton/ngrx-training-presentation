import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import * as fromStore from '@store/reducers/index';

@Component({
  selector: 'app-left-panel-monitor',
  templateUrl: './left-panel-monitor.component.html',
  styleUrls: ['./left-panel-monitor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftPanelMonitorComponent implements OnInit {

  stringifiedAppState: string;

  // Use setter inputs if you need to logic to execute on an update.
  @Input() set appState(appState: fromStore.ApplicationState) {
    this.stringifiedAppState = JSON.stringify(appState);
  }

  constructor() { }

  ngOnInit() {
  }

}
