import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel-monitor',
  templateUrl: './left-panel-monitor.component.html',
  styleUrls: ['./left-panel-monitor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftPanelMonitorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
