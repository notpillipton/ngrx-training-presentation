import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuotesDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
