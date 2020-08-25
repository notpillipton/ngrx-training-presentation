import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import * as fromUIPanel from '@store/actions/ui-state.action';

@Component({
  selector: 'app-detail-panel-container',
  templateUrl: './detail-panel-container.component.html',
  styleUrls: ['./detail-panel-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailPanelContainerComponent implements OnInit {

  @Input() detailPanelState: fromUIPanel.DetailPanelState;

  constructor() { }

  ngOnInit() {
  }

}
