import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromStore from '@store/reducers/index';
import * as fromUIPanel from '@store/actions/ui-state.action';

@Component({
  selector: 'app-detail-panel-container',
  templateUrl: './detail-panel-container.component.html',
  styleUrls: ['./detail-panel-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailPanelContainerComponent implements OnInit {

  @Input() detailsPanelState: fromUIPanel.DetailsPanelState;

  selectedQuote$ = this.store.select(fromStore.getSelectedQuote);

  constructor(private readonly store: Store<fromStore.ApplicationState>) { }

  ngOnInit() {
  }

}
